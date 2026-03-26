import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 bg-black/70 backdrop-blur-md text-white z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Left Section: Logo + Admin Login */}
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-blue-400">
            Chaitanya.dev
          </h1>
          <Link
            to="/login"
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-300 border border-gray-600 rounded-lg hover:text-blue-400 hover:border-blue-400 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Admin
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          <li className="hover:text-blue-400 cursor-pointer transition-colors duration-300">Home</li>
          <li className="hover:text-blue-400 cursor-pointer transition-colors duration-300">Projects</li>
          <li className="hover:text-blue-400 cursor-pointer transition-colors duration-300">Skills</li>
          <li className="hover:text-blue-400 cursor-pointer transition-colors duration-300">Contact</li>
        </ul>

        {/* Right Section: Resume Button + Mobile Menu */}
        <div className="flex items-center gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg hover:from-blue-600 hover:to-blue-800 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </a>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} className="text-2xl">
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-md text-center py-4 border-t border-gray-800">
          <p className="py-2 hover:text-blue-400 cursor-pointer transition-colors duration-300">Home</p>
          <p className="py-2 hover:text-blue-400 cursor-pointer transition-colors duration-300">Projects</p>
          <p className="py-2 hover:text-blue-400 cursor-pointer transition-colors duration-300">Skills</p>
          <p className="py-2 hover:text-blue-400 cursor-pointer transition-colors duration-300">Contact</p>
          <Link
            to="/login"
            className="inline-block mt-2 px-4 py-2 text-sm text-gray-300 border border-gray-600 rounded-lg hover:text-blue-400 hover:border-blue-400 transition-all duration-300"
            onClick={() => setOpen(false)}
          >
            Admin Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;