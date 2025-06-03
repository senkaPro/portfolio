import React from 'react';
import Image from 'next/image';

interface Certificate {
  title: string;
  issuer: string;
  url: string;
  imagePath: string;
}

const certificatesData: Certificate[] = [
  {
    title: 'CS50x: Introduction to Computer Science',
    issuer: 'Harvard University via edX',
    url: 'https://courses.edx.org/certificates/e55208bf44264ba494aa9670dc874248?_gl=1*11yctce*_ga*MTE1NzMxNTY1MS4xNjc4MTA2Mjcy*_ga_D3KS4KMDT0*MTY5NDczMzA3Ny4xLjEuMTY5NDczMzEyNS4xMi4wLjA.',
    imagePath: '/cs50-certificate-snapshot.png',
  },
  {
    title: 'Senior React Native Developer Certificate',
    issuer: 'Lasting Dynamics',
    url: 'https://www.lastingdynamics.com/badge/?profile=senatselimoski',
    imagePath: '/academy-snapshot_000.png',
  },
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-24 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="mx-auto lg:w-4/5 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-12">
          Certificates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificatesData.map((cert, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">{cert.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">Issued by {cert.issuer}</p>
              
              <div className="w-full h-[200px] relative mb-4 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                <Image
                  src={cert.imagePath}
                  alt={`${cert.title} Certificate`}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>

              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
              >
                View Full Certificate
                <svg className="ml-2 -mr-0.5 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 