const certificates = [
  {
    title: "AI-ML Virtual Internship",
    platform: "AICTE",
    file: "/certificates/ai-ml-virtual-internship.pdf",
  },
  {
    title: "Web Development using HTML & CSS (Foundation Certification)",
    platform: "TechA",
  },
  {
    title: "Software Development Life Cycle (SDLC) Certification",
  },
  {
    title: "SQL (MySQL) Basic & Intermediate Certification - 2026",
    platform: "HackerRank",
    file: "/certificates/sql-mysql-certificate.pdf",
  },
  {
    title: "Software Testing and Quality Assurance (STQA)",
    platform: "Infosys",
    file: "/certificates/infosys-stqa.pdf",
  },
  {
    title: "Cloud Computing",
    platform: "Infosys",
    file: "/certificates/infosys-cloud-computing.pdf",
  },
];

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="scroll-mt-24 bg-black px-6 py-20 text-white md:px-10"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-center text-4xl font-bold">
          My <span className="text-blue-400">Certificates</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <article
              key={certificate.title}
              className="flex flex-col items-center rounded-[1.75rem] border border-gray-800 bg-gray-900/70 p-6 text-center shadow-lg transition duration-300 hover:-translate-y-1 hover:border-blue-500"
            >
              <h3 className="text-xl font-semibold text-slate-100">{certificate.title}</h3>
              {certificate.platform && (
                <p className="mt-2 text-base text-gray-400">{certificate.platform}</p>
              )}
              {certificate.file && (
                <a
                  href={certificate.file}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-600"
                >
                  View Certificate
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
