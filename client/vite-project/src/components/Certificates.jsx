import { useState } from "react";
import { motion } from "framer-motion";
import cert1 from "../assets/cert1.png";
import cert2 from "../assets/cert2.png";
import cert3 from "../assets/cert3.png";

const certificates = [
  {
    title: "Java Programming",
    platform: "Coursera",
    score: "90%",
    image: cert1,
  },
  {
    title: "Web Development",
    platform: "Udemy",
    score: "95%",
    image: cert2,
  },
  {
    title: "Data Structures",
    platform: "NPTEL",
    score: "88%",
    image: cert3,
  },
];

const Certificates = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="min-h-screen bg-black text-white px-10 py-20">

      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-12">
        My <span className="text-purple-400">Certificates</span>
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8">

        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-white/5 p-6 rounded-xl border border-gray-700 hover:border-purple-500 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelected(cert)}
          >
            <h3 className="text-xl font-semibold">{cert.title}</h3>
            <p className="text-gray-400">{cert.platform}</p>
            <p className="text-purple-400">{cert.score}</p>
          </motion.div>
        ))}

      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected.image}
            alt="certificate"
            className="w-3/4 rounded-lg"
          />
        </div>
      )}

    </section>
  );
};

export default Certificates;