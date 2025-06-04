'use client';

import React, { useRef, useMemo, useLayoutEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { BufferAttribute, BufferGeometry, LineBasicMaterial, LineSegments, Vector3 } from 'three';

interface ShapeConfig {
  position: [number, number, number];
  color: string; // Color for the outer edges
  args: [number]; // This will now represent the scale of the tesseract
  rotationSpeed?: number;
}

interface AbstractSceneProps {
  position?: [number, number, number];
}

function SpinningMesh({ position, color, rotationSpeed = 0.01 }: Omit<ShapeConfig, 'args'>) {
  const meshRef = useRef<LineSegments>(null);
  const geometryRef = useRef<BufferGeometry>(null);
  const { viewport } = useThree();

  // Calculate dynamic args based on viewport size
  // Using Math.min(viewport.width, viewport.height) to scale proportionally to the smaller dimension
  // Adjust the multiplier (e.g., 0.45) to control the overall size relative to the viewport
  const dynamicArgs = Math.min(viewport.width, viewport.height) * 0.45;

  // Define tesseract vertices and edges in 4D space
  const vertices4D = useMemo(() => {
    const v = [];
    for (let i = 0; i < 16; i++) {
      v.push(
        ((i >> 0) & 1) * 2 - 1,
        ((i >> 1) & 1) * 2 - 1,
        ((i >> 2) & 1) * 2 - 1,
        ((i >> 3) & 1) * 2 - 1
      );
    }
    return v;
  }, []);

  const edges = useMemo(() => {
    const e = [];
    const dim = 4;
    const numVertices = 1 << dim;

    for (let i = 0; i < numVertices; i++) {
      for (let j = 0; j < dim; j++) {
        const neighbor = i ^ (1 << j);
        if (i < neighbor) { // Ensure each edge is added only once
          e.push(i, neighbor);
        }
      }
    }
    return e;
  }, []);

  const projectedVertices = useMemo(() => new Float32Array(vertices4D.length / 4 * 3), [vertices4D]);

  let angle = 0; // Reset 4D rotation angle to 0

  // Set initial 3D rotation to achieve a direct square view for the projection
  useLayoutEffect(() => {
    if (meshRef.current) {
      // This initial rotation helps align the default 4D projection to look like a square
      meshRef.current.rotation.set(Math.PI / 4, Math.atan(1 / Math.sqrt(2)), 0); 
    }
  }, []);

  useFrame(() => {
    if (meshRef.current && geometryRef.current) {
      angle += rotationSpeed;

      // Simple 4D rotation (example: around XW and YZ planes, now uniform speed)
      const cosXW = Math.cos(angle);
      const sinXW = Math.sin(angle);
      const cosYZ = Math.cos(angle);
      const sinYZ = Math.sin(angle);

      for (let i = 0; i < vertices4D.length; i += 4) {
        let x = vertices4D[i];
        let y = vertices4D[i + 1];
        let z = vertices4D[i + 2];
        let w = vertices4D[i + 3];

        // Rotate in XW plane
        let tempX = x * cosXW - w * sinXW;
        let tempW = x * sinXW + w * cosXW;
        x = tempX;
        w = tempW;

        // Rotate in YZ plane
        let tempY = y * cosYZ - z * sinYZ;
        let tempZ = y * sinYZ + z * cosYZ;
        y = tempY;
        z = tempZ;

        // Project 4D to 3D with perspective
        const distance = 4; 
        const divisor = (distance + w);

        projectedVertices[i / 4 * 3] = (x / divisor) * dynamicArgs; // x
        projectedVertices[i / 4 * 3 + 1] = (y / divisor) * dynamicArgs; // y
        projectedVertices[i / 4 * 3 + 2] = (z / divisor) * dynamicArgs; // z
      }

      geometryRef.current.setAttribute('position', new BufferAttribute(projectedVertices, 3));
      geometryRef.current.attributes.position.needsUpdate = true;

      if (!geometryRef.current.index) {
        geometryRef.current.setIndex(new BufferAttribute(new Uint16Array(edges), 1));
      }

      // Overall 3D rotation around X-axis (top to bottom)
      meshRef.current.rotation.x += rotationSpeed / 8;
    }
  });

  return (
    <lineSegments position={position} ref={meshRef}>
      <bufferGeometry ref={geometryRef} />
      <lineBasicMaterial color={color} />
    </lineSegments>
  );
}

export default function Abstract3DScene({ position = [0, 0, 0] }: AbstractSceneProps) {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} />
      <SpinningMesh position={position} color="black" rotationSpeed={0.003} />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
} 