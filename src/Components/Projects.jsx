import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="px-6 bg-gray-50  scroll-mt-20 my-12 mx-4 md:mx-16 lg:mx-28 py-6">
      <h1 className="text-center text-indigo-500 font-sans text-3xl md:text-4xl font-bold mb-12">
        Projects I Built
      </h1>

      <div className="space-y-8">

        <div className="flex flex-col md:flex-row bg-white shadow-lg hover:shadow-2xl rounded-xl justify-center items-center p-6 border transition-transform transform hover:-translate-y-1">
          <img
            src="/travelX.png"
            className="w-full md:w-1/3 h-60 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
            alt="TravelX Project"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-2">TravelX</h2>
            <p className="text-gray-600 mb-4">
              A travel booking website where users can explore destinations,
              compare packages, and make bookings seamlessly with a responsive
              design. It provides an interactive UI with smooth navigation.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Search and filter destinations easily</li>
              <li>Compare travel packages with pricing</li>
              <li>Booking form integrated with local storage</li>
              <li>Fully responsive design for all devices</li>
            </ul>
            <p className="text-gray-600 mb-4">
              <strong>Tech stack:</strong> HTML, CSS, JavaScript, React.js, Tailwind CSS
            </p>
            <div className="flex gap-4">
              <a
                href="https://travel-x-ten.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/MohammadDanishAkhtar/TravelX.git"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row bg-white shadow-lg hover:shadow-2xl rounded-xl p-6 border transition-transform transform hover:-translate-y-1">
          <img
            src="/blog.png"
            className="w-full md:w-1/3 h-60 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
            alt="Blog Project"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-2">Blog Website</h2>
            <p className="text-gray-600 mb-4">
              A blogging platform that allows users to create, edit, and share
              posts with a clean UI and markdown support. Built with modern web
              technologies to ensure speed and responsiveness.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Create, edit, and delete blog posts</li>
              <li>Support for markdown formatting</li>
              <li>Clean and minimalistic user interface</li>
              <li>Optimized for SEO and performance</li>
            </ul>
            <p className="text-gray-600 mb-4">
              <strong>Tech stack:</strong> HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS
            </p>
            <div className="flex gap-4">
              <a
                href="https://danish-blog.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/MohammadDanishAkhtar/danish-blog.git"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
