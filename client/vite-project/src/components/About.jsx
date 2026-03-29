const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-black px-6 py-20 text-white md:px-10"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-center text-4xl font-bold">
          About <span className="text-blue-400">Me</span>
        </h2>

        <div className="rounded-[2rem] border border-gray-800 bg-gray-900/70 p-6 text-base leading-7 text-gray-300 shadow-lg transition duration-300 hover:border-blue-500 md:p-8">
          <p>
            I am Chaitanya Mali, a Computer Science student and full-stack developer who
            enjoys building modern, responsive, and practical web applications.
          </p>
          <p className="mt-6">
            My main focus is creating clean user interfaces with React and building reliable
            backend functionality using Node.js, Express, and MongoDB. I also enjoy problem
            solving, improving performance, and turning ideas into polished projects.
          </p>
          <p className="mt-6">
            I am continuously learning, exploring better development practices, and growing
            as a developer through projects, coding practice, and real implementation work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
