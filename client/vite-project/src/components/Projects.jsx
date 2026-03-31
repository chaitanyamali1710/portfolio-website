const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern personal portfolio built to showcase skills, projects, certificates, and contact details in one clean experience.",
    tech: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/chaitanyamali1710/portfolio-website",
    live: "https://portfolio-website-ym27.vercel.app/",
  },
  {
    title: "Currency Converter",
    description:
      "A responsive web app for converting currencies with a simple interface and live conversion-focused workflow.",
    tech: ["JavaScript", "API", "CSS"],
    github: "https://github.com/chaitanyamali1710",
    live: "https://portfolio-website-ym27.vercel.app/",
  },
  {
    title: "Poultry Management System",
    description:
      "A full-stack project idea for managing rooms, students, and hostel operations with organized data handling.",
    tech: ["MERN", "MongoDB", "Express"],
    github: "https://github.com/chaitanyamali1710/poultry-farm-system.git",
    live: "https://poultry-farm-system-bychaitanya.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-black text-white px-6 py-20 md:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-4xl font-bold">
          My <span className="text-blue-400">Projects</span>
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-400">
          A few projects that reflect my interest in frontend design, full-stack development,
          and building useful real-world applications.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex h-full flex-col rounded-2xl border border-gray-800 bg-gray-900/70 p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-blue-500"
            >
              <h3 className="mb-3 text-2xl font-semibold">{project.title}</h3>
              <p className="mb-5 text-sm leading-6 text-gray-300">{project.description}</p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-gray-700 px-4 py-2 text-sm text-gray-200 transition hover:border-blue-400 hover:text-blue-400"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-600"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
