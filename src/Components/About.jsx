import React from "react";
import { DiHtml5, DiCss3, DiJavascript, DiMysql, DiReact, DiNodejs, DiMongodb, DiVisualstudio, DiWindows } from "react-icons/di";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaGithubSquare, FaBootstrap } from "react-icons/fa";

export default function Skills() {
  return (
    <>
      <section id="about" className="py-16 bg-gray-50 shadow-lg text-gray-800">
        <h1 className="text-center text-indigo-500 font-sans text-3xl md:text-4xl font-bold mb-12">
          About me
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-6 md:px-16">
          <img
            src="image.jpeg"
            alt="My picture"
            className="rounded-full w-60 h-60 md:w-72 md:h-72 object-cover shadow-md"
          />

          <p className="bg-green-100 w-full md:w-2/3 lg:max-w-2xl p-6 rounded-md shadow-sm text-justify leading-relaxed">
            Hello! My name is <span className="font-semibold">Mohammad Danish Akhtar</span>,
            a passionate <span className="font-medium">web developer</span> and a
            <span className="font-medium"> B.C.A graduate</span>. I have a strong foundation in
            <span className="font-medium"> HTML, CSS, JavaScript, React.js, Next.js, and Tailwind CSS</span>,
            and I am continuously exploring backend technologies like
            <span className="font-medium"> Node.js, MongoDB, and MySQL</span> to build full-stack applications.
            <br /><br />
            I love creating responsive, user-friendly, and modern web applications that provide
            seamless user experiences. Along with development, I actively practice
            <span className="font-medium"> Data Structures and Algorithms</span> on platforms like
            <span className="font-medium"> LeetCode</span> and <span className="font-medium"> HackerRank</span>
            to strengthen my problem-solving skills.
            <br /><br />
            My goal is to work in an environment that challenges me to learn new things, enhances
            my technical expertise, and inspires me to deliver impactful digital solutions. Outside coding,
            I enjoy exploring technology trends and continuously improving my craft.
          </p>

        </div>
      </section>

      <section id="education" className="py-16 bg-white text-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">
            Education
          </h2>

          <div className="flex flex-col md:flex-row md:justify-between gap-6">
            <div className="flex-1 p-6 bg-white rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-blue-600">
                Bachelor of Computer Science
              </h3>
              <p className="text-gray-800">G H Raisoni College of Arts, Commerce and Science, Nagpur - 2022-2025</p>
              <p className="mt-2">
                Focused on <span className="font-semibold">Web Development, DBMS, and Java Programming</span>.
                Built multiple projects applying modern technologies.
              </p>
            </div>

            <div className="flex-1 p-6 bg-white rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-blue-600">
                Higher Secondary (Class XII)
              </h3>
              <p className="text-gray-800">M M Rabbani Junior College, Kamptee - 2021-2022</p>
              <p className="mt-2">
                Studied Science (PCB) with Mathematics as an elective.
              </p>
            </div>

            <div className="flex-1 p-6 bg-white rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-blue-600">
                Secondary (Class X)
              </h3>
              <p className="text-gray-800">M M Rabbani High School, Kamptee - 2019-2020</p>
              <p className="mt-2">
                Completed with distinction, laying the foundation for higher studies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="scroll-mt-20 my-12 px-4 md:px-16 lg:px-28 py-6">
        <h1 className="flex justify-center text-indigo-500 font-sans text-2xl md:text-4xl font-bold mb-12">
          My Skills & Technologies
        </h1>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-8">Skills</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white shadow-2xl hover:shadow-lg rounded-lg p-6 flex flex-col items-center">
              <DiHtml5 size={60} className="text-orange-500" />
              <p className="mt-2 font-semibold">HTML5</p>
            </div>

            <div className="bg-white shadow-2xl hover:shadow-lg rounded-lg p-6 flex flex-col items-center">
              <DiCss3 size={60} className="text-blue-500" />
              <p className="mt-2 font-semibold">CSS3</p>
            </div>

            <div className="bg-white shadow-2xl hover:shadow-lg rounded-lg p-6 flex flex-col items-center">
              <DiJavascript size={60} className="text-yellow-400" />
              <p className="mt-2 font-semibold">JavaScript</p>
            </div>

            <div className="bg-white shadow-2xl hover:shadow-lg rounded-lg p-6 flex flex-col items-center">
              <DiReact size={60} className="text-cyan-400" />
              <p className="mt-2 font-semibold">React</p>
            </div>

            <div className="bg-white shadow-2xl hover:shadow-lg rounded-lg p-6 flex flex-col items-center">
              <RiNextjsFill size={60} className="text-black" />
              <p className="mt-2 font-semibold">Next.js</p>
            </div>

            <div className="bg-white shadow-2xl hover:shadow-lg rounded-lg p-6 flex flex-col items-center">
              <RiTailwindCssFill size={60} className="text-cyan-400" />
              <p className="mt-2 font-semibold">Tailwind CSS</p>
            </div>

            <div className="bg-white shadow-2xl hover:shadow-lg rounded-lg p-6 flex flex-col items-center">
              <DiNodejs size={60} className="text-green-600" />
              <p className="mt-2 font-semibold">Node.js</p>
            </div>

            <div className="bg-white shadow-2xl hover:shadow-lg rounded-lg p-6 flex flex-col items-center">
              <DiMongodb size={60} className="text-green-500" />
              <p className="mt-2 font-semibold">MongoDB</p>
            </div>

            <div className="bg-white shadow-2xl hover:shadow-lg rounded-lg p-6 flex flex-col items-center">
              <DiMysql size={60} className="text-blue-600" />
              <p className="mt-2 font-semibold">MySQL</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-8">Technologies</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white shadow-2xl hover:shadow-lg rounded-lg p-6 flex flex-col items-center">
              <FaGithubSquare size={60} className="text-gray-800" />
              <p className="mt-2 font-semibold">GitHub</p>
            </div>

            <div className="bg-white shadow-2xl hover:shadow-lg rounded-lg p-6 flex flex-col items-center">
              <FaBootstrap size={60} className="text-purple-600" />
              <p className="mt-2 font-semibold">Bootstrap</p>
            </div>

            <div className="bg-white shadow-2xl hover:shadow-lg rounded-lg p-6 flex flex-col items-center">
              <DiVisualstudio size={60} className="text-blue-500" />
              <p className="mt-2 font-semibold">VS Code</p>
            </div>

            <div className="bg-white shadow-2xl hover:shadow-lg rounded-lg p-6 flex flex-col items-center">
              <DiWindows size={60} className="text-blue-400" />
              <p className="mt-2 font-semibold">Windows</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
