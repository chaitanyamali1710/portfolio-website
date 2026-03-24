import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 bg-black/70 backdrop-blur-md text-white z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-400">
          Chaitanya.dev
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="hover:text-blue-400 cursor-pointer">Projects</li>
          <li className="hover:text-blue-400 cursor-pointer">Skills</li>
          <li className="hover:text-blue-400 cursor-pointer">Contact</li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black text-center py-4">
          <p className="py-2">Home</p>
          <p className="py-2">Projects</p>
          <p className="py-2">Skills</p>
          <p className="py-2">Contact</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;