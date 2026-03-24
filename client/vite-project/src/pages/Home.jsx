import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";
import { Link } from "react-router-dom";

const Home = () => {
  const isLoggedIn = localStorage.getItem("token");

  return (
    <div className="relative">
      {/* Main Sections */}
      <Hero />
      <Projects />
      <Certificates />
      <Contact />

      {/* 🔐 Floating Admin Login Button */}
      {!isLoggedIn && (
        <Link
          to="/login"
          className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg transition duration-300"
        >
          🔐 Admin Login
        </Link>
      )}

      {/* 🚀 Optional: Go to Admin Button (after login) */}
      {isLoggedIn && (
        <Link
          to="/admin"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg transition duration-300"
        >
          🚀 Dashboard
        </Link>
      )}
    </div>
  );
};

export default Home;