import Hero from "../components/Hero";
import About from "../components/About";
import TechnicalSkills from "../components/TechnicalSkills";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="relative">
      <Hero />
      <About />
      <TechnicalSkills />
      <Certificates />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
