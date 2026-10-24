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
            I am Chaitanya Mali, a motivated Computer Science undergraduate skilled at
            turning user and business needs into full-stack products using the MERN stack,
            JavaScript, HTML, CSS, REST APIs, and Firebase.
          </p>
          <p className="mt-6">
            I have experience building responsive, data-driven web platforms with real-time
            dashboards and integrated APIs. I am familiar with AI/ML concepts, prompt
            engineering, GitHub, and Jenkins CI/CD.
          </p>
          <p className="mt-6">
            I am a quick learner with strong analytical and problem-solving abilities,
            interested in enterprise ERP, AI automation, and secure software delivery.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
