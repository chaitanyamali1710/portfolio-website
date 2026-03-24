  
  import { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const res = await axios.get("http://127.0.0.1:5000/projects");
    setProjects(res.data);
  };

  return (
    <section className="bg-black text-white p-10">
      <h2 className="text-3xl mb-6">Projects</h2>

      {projects.map((p, i) => (
        <div key={i} className="bg-gray-800 p-4 mb-4 rounded">
          <h3 className="text-xl">{p.title}</h3>
          <p>{p.description}</p>
          <p className="text-sm text-gray-400">{p.tech}</p>

          <a href={p.github} className="text-blue-400 mr-4">GitHub</a>
          <a href={p.live} className="text-green-400">Live</a>
        </div>
      ))}
    </section>
  );
};

export default Projects;
  /*import { motion } from "framer-motion";

const projects = [
  {
    title: "Currency Converter",
    desc: "Real-time currency conversion using API with clean UI.",
    tech: ["React", "Node", "API"],
    github: "#",
    live: "#",
  },
  {
    title: "Hostel Management System",
    desc: "Smart hostel system with room allocation and tracking.",
    tech: ["MERN", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio with animations and responsive design.",
    tech: ["React", "Tailwind"],
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen bg-black text-white px-10 py-20">

      {/* Heading */
     /* <h2 className="text-4xl font-bold text-center mb-12">
        My <span className="text-blue-400">Projects</span>
      </h2>

      {/* Grid */
     /* <div className="grid md:grid-cols-3 gap-8">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            {/* Title */
           /* <h3 className="text-2xl font-semibold mb-2">
              {project.title}
            </h3>

            {/* Description */
           /* <p className="text-gray-400 mb-4">
              {project.desc}
            </p>

            {/* Tech Stack */
           /*  <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */
          /*    <div className="flex gap-4">
              <a
                href={project.github}
                className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700"
              >
                GitHub
              </a>

              <a
                href={project.live}
                className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600"
              >
                Live
              </a>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Projects;
*/
