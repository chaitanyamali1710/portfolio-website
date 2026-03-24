import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post("https://your-backend.onrender.com/contact", form);
    console.log(res.data);
    alert("Message sent successfully!");
  } catch (error) {
    console.log("FULL ERROR:", error); // 👈 IMPORTANT
    alert("Error sending message");
  }
};

  return (
    <section className="min-h-screen bg-black text-white px-10 py-20">

      <h2 className="text-4xl font-bold text-center mb-12">
        Contact <span className="text-blue-400">Me</span>
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="p-3 bg-gray-800 rounded-lg outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="p-3 bg-gray-800 rounded-lg outline-none"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="p-3 bg-gray-800 rounded-lg outline-none"
        />

        <button type="submit" className="p-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition">
  Send Message
</button>
      </form>
    </section>
  );
};

export default Contact;