import React, { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    } else {
      console.warn(`Section with id '${id}' not found`);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#1f2429] text-white shadow-md z-50">
      <nav className="flex items-center justify-between max-w-6xl mx-auto px-4 h-16">

        <h1 className="text-xl font-bold text-blue-400 cursor-pointer">
          Danish<span className="text-white">Portfolio</span>
        </h1>

        <ul className="hidden md:flex space-x-6">
          <li onClick={() => scrollToSection("home")} className="cursor-pointer hover:text-blue-400">Home</li>
          <li onClick={() => scrollToSection("about")} className="cursor-pointer hover:text-blue-400">About</li>
          <li onClick={() => scrollToSection("education")} className="cursor-pointer hover:text-blue-400">Education</li>
          <li onClick={() => scrollToSection("skills")} className="cursor-pointer hover:text-blue-400">Skills</li>
          <li onClick={() => scrollToSection("projects")} className="cursor-pointer hover:text-blue-400">Projects</li>
          <li onClick={() => scrollToSection("contact")} className="cursor-pointer hover:text-blue-400">Contact</li>
          <a
            href="/MohammadDanishAkhtar.pdf"
            download="Mohammad_Danish_CV.pdf"
            className="cursor-pointer hover:text-blue-400"
          >
            Resume
          </a>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col space-y-1"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-[#1f2429] border-t border-gray-700">
          <ul className="flex flex-col space-y-4 p-4">
            <li onClick={() => scrollToSection("home")} className="cursor-pointer hover:text-blue-400">Home</li>
            <li onClick={() => scrollToSection("about")} className="cursor-pointer hover:text-blue-400">About</li>
            <li onClick={() => scrollToSection("education")} className="cursor-pointer hover:text-blue-400">Education</li>
            <li onClick={() => scrollToSection("skills")} className="cursor-pointer hover:text-blue-400">Skills</li>
            <li onClick={() => scrollToSection("projects")} className="cursor-pointer hover:text-blue-400">Projects</li>
            <li onClick={() => scrollToSection("contact")} className="cursor-pointer hover:text-blue-400">Contact</li>
            <a
              href="/MohammadDanishAkhtar.pdf"
              download="Mohammad_Danish_CV.pdf"
              className="cursor-pointer hover:text-blue-400"
            >
              Resume
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}
