import { TypeAnimation } from "react-type-animation";
import heroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen scroll-mt-24 bg-black px-6 py-20 text-white md:px-10"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 rounded-[2rem] border border-gray-800 bg-gray-900/70 p-6 shadow-lg md:grid-cols-[1.2fr_0.8fr] md:p-10">
        <div className="text-center md:text-left">
          <p className="mb-4 text-xl font-semibold tracking-wide text-slate-300 md:text-3xl">
            Hello, Everyone.
          </p>

          <p className="mb-4 text-2xl font-semibold text-slate-300 md:text-4xl">
            This is Chaitanya
          </p>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-100 md:text-6xl">
            Chaitanya Mali
          </h1>

          <div className="max-w-3xl text-sm tracking-[0.1em] text-gray-400 md:text-xl">
            <TypeAnimation
              sequence={[
                "MERN Developer | Java Enthusiast | Problem Solver",
                2000,
                "Full Stack Builder | Clean UI Focus | Fast Learner",
                2000,
                "React | Node.js | MongoDB | Tailwind CSS",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={heroImg}
            alt="Chaitanya Mali"
            className="w-52 rounded-full border-4 border-blue-500/40 object-cover shadow-[0_0_40px_rgba(59,130,246,0.25)] transition duration-300 hover:scale-105 md:w-72"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
