const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Vite",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Java",
  "DSA",
  "Git & GitHub",
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

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-2xl border border-gray-800 bg-gray-900/70 px-5 py-4 text-center text-base font-medium text-gray-200 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-white"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
