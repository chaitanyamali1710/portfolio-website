import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";

function App() {
  return (
    <>
     <Navbar />
      {/* <Hero />
      <Projects />
      <Certificates />
      <Contact />*/}
     <Router>
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/admin" element={<Admin />} />
       <Route path="/login" element={<Login />} />
       <Route path="/admin" element={ <ProtectedRoute><Admin /></ProtectedRoute>}/>
       </Routes>
      
</Router>
    </>
  );
}

export default App;