import React from "react";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-gradient-to-r from-slate-600 to-slate-800 scroll-mt-20 py-8 flex flex-col justify-center items-center text-white"
    >
      <h2 className="text-2xl md:text-3xl font-bold">Let’s Connect</h2>
      <p className="mb-4">Feel free to contact me anytime</p>
      
      <div className="flex space-x-6 text-3xl sm:text-4xl md:text-5xl mb-4">
        <a
          href="https://www.linkedin.com/in/mohammad-danish-akhtar"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-transform transform hover:scale-110"
        >
          <TiSocialLinkedinCircular />
        </a>
        <a
          href="https://github.com/MohammadDanishAkhtar"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-transform transform hover:scale-110"
        >
          <FaGithubSquare />
        </a>
        <a
          href="mailto:danishmda77@gmail.com"
          className="hover:text-red-400 transition-transform transform hover:scale-110"
        >
          <MdEmail />
        </a>
      </div>

      <p className="text-sm text-gray-300">
        © {new Date().getFullYear()} Danish Akhtar. All rights reserved.
      </p>
    </section>
  );
}
