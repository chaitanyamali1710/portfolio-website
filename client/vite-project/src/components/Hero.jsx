import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import heroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-between px-10 bg-black text-white relative overflow-hidden">

      {/* Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500 opacity-20 blur-3xl rounded-full top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-500 opacity-20 blur-3xl rounded-full bottom-[-100px] right-[-100px]"></div>

      {/* LEFT SIDE */}
      <motion.div
        className="z-10"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Chaitanya
          </span>
        </h1>

        {/* Typing Animation */}
        <div className="mt-4 text-xl text-gray-300">
          <TypeAnimation
            sequence={[
              "MERN Developer 🚀",
              2000,
              "Java + DSA Enthusiast 💻",
              2000,
              "Building Real Projects 🔥",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:scale-105 transition">
            View Projects
          </button>

          <button className="px-6 py-2 border border-blue-500 rounded-lg hover:bg-blue-500 transition">
            Contact Me
          </button>
        </div>
      </motion.div>

      {/* RIGHT SIDE */}
       <motion.img
  src={heroImg}
  alt="profile"
className="w-72 md:w-96 mt-10 md:mt-0 rounded-full border-2 border-blue-30 shadow-[0_0_40px_#3b82f6] hover:scale-105 transition duration-300"  initial={{ x: 100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 1 }}
/>
    </section>
  );
};

export default Hero;