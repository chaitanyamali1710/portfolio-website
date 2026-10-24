const skills = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "SQL", "Python", "C"],
  },
  {
    category: "Frontend",
    items: ["React.js", "HTML", "CSS"],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "API Integration",
    ],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL"],
  },
  {
    category: "Tools & DevOps",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "Jenkins",
      "CI/CD Fundamentals",
      "API Security",
    ],
  },
  {
    category: "Core Concepts",
    items: ["Data Structures & Algorithms (DSA)", "Object-Oriented Programming (OOP)", "DBMS"],
  },
];

const TechnicalSkills = () => {
  return (
    <section
      id="skills"
      className="scroll-mt-24 bg-black px-6 py-20 text-white md:px-10"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-center text-4xl font-bold">
          Technical <span className="text-blue-400">Skills</span>
        </h2>

        <div className="grid gap-5 sm:grid-cols-2">
          {skills.map(({ category, items }) => (
            <div
              key={category}
              className="rounded-2xl border border-gray-800 bg-gray-900/70 p-5 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-blue-500"
            >
              <h3 className="mb-4 text-lg font-semibold text-blue-300">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-blue-500/10 px-3 py-1.5 text-sm text-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
