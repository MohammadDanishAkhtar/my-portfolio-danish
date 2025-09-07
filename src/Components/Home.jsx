import React from 'react'

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 pt-5 gap-10" id="home">
      <div className="flex-1 flex justify-center">
        <img
          src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
          alt="Illustration"
          className="w-full max-w-md"
        />
      </div>

      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-3xl font-bold text-indigo-500 mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg text-gray-600 max-w-xl">
          I am a passionate web developer specializing in modern web technologies
          like React, Tailwind CSS, and JavaScript. Here you can explore my projects,
          skills, and accomplishments. This portfolio showcases my work and the
          solutions I create to bring ideas to life.
        </p>
      </div>
    </section>

  )
}
