import { useState } from "react";
import cert1 from "../assets/cert1.png";
import cert2 from "../assets/cert2.png";
import cert3 from "../assets/cert3.png";

const certificates = [
  {
    title: "Java Programming",
    platform: "Coursera",
    image: cert1,
  },
  {
    title: "Web Development",
    platform: "Udemy",
    image: cert2,
  },
  {
    title: "Data Structures",
    platform: "NPTEL",
    image: cert3,
  },
];

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section
      id="certificates"
      className="scroll-mt-24 bg-black px-6 py-20 text-white md:px-10"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-center text-4xl font-bold">
          My <span className="text-blue-400">Certificates</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {certificates.map((certificate) => (
            <button
              key={certificate.title}
              type="button"
              onClick={() => setSelectedCertificate(certificate)}
              className="rounded-[1.75rem] border border-gray-800 bg-gray-900/70 p-6 text-center shadow-lg transition duration-300 hover:-translate-y-1 hover:border-blue-500"
            >
              <h3 className="text-xl font-semibold text-slate-100">{certificate.title}</h3>
              <p className="mt-2 text-base text-gray-400">{certificate.platform}</p>
              <span className="mt-5 inline-flex rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-600">
                View
              </span>
            </button>
          ))}
        </div>
      </div>

      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="w-full max-w-4xl rounded-[2rem] border border-gray-800 bg-gray-900 p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-slate-100">
                  {selectedCertificate.title}
                </h3>
                <p className="mt-1 text-slate-400">{selectedCertificate.platform}</p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCertificate(null)}
                className="rounded-full border border-gray-700 px-4 py-2 text-sm text-gray-300 transition hover:border-blue-500 hover:text-white"
              >
                Close
              </button>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] border border-gray-800 bg-black">
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="max-h-[70vh] w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
