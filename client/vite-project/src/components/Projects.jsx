const projects = [
  {
    title: "MachineGuard - Industrial AI Maintenance and Operations Platform",
    description:
      "Built a MERN-based industrial monitoring platform with simulated sensor data, interactive telemetry dashboards, equipment health analytics, anomaly alerts, and maintenance work orders. Integrated a FastAPI AI service and RAG assistant to analyze machine conditions and provide explainable recommendations.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT",
      "AI Integration",
      "RAG",
    ],
    github: "https://github.com/chaitanyamali1710/Machine-Guard",
    live: "https://machine-guard-11d86.web.app/",
  },
  {
    title: "Smart Poultry Farm Management System",
    description:
      "Developed a customer ordering system and admin dashboard for poultry operations, covering flock health, climate monitoring, vaccination schedules, treatment alerts, mortality thresholds, and low-stock notifications.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "External APIs",
    ],
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

        <div className="grid gap-8 md:grid-cols-2">
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
