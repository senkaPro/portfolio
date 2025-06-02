import Header from '@/components/layout/Header';
import SparkleBackground from '@/components/effects/SparkleBackground';

export default function Blog() {
  return (
    <main className="relative min-h-screen">
      <SparkleBackground />
      <Header />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-16">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Blog
          </h1>
          <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Thoughts, tutorials, and insights about web development and technology.
          </p>
          
          {/* Blog posts will be listed here */}
          <div className="mt-16 space-y-20">
            {/* Placeholder for blog posts */}
            <article className="relative isolate flex flex-col gap-8 lg:flex-row">
              <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                <div className="absolute inset-0 rounded-2xl bg-gray-50 dark:bg-gray-800" />
              </div>
              <div>
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime="2024-03-16" className="text-gray-500 dark:text-gray-400">
                    Mar 16, 2024
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-50 dark:bg-gray-800 px-3 py-1.5 font-medium text-gray-600 dark:text-gray-300">
                    Web Development
                  </span>
                </div>
                <div className="group relative max-w-xl">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300">
                    <a href="#">
                      <span className="absolute inset-0" />
                      Getting Started with Next.js 14
                    </a>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-300">
                    Learn about the latest features and improvements in Next.js 14, and how to leverage them in your projects.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
} 