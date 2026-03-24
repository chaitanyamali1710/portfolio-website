import { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const API = "https://portfolio-website-8ofh.onrender.com";

const Admin = () => {
  const [messages, setMessages] = useState([]);
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({
    title: "",
    description: "",
    tech: "",
    github: "",
    live: "",
    image: "",
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchMessages();
    fetchProjects();
  }, []);

  // ✅ FETCH MESSAGES
  const fetchMessages = async () => {
    try {
      const res = await axios.get(`${API}/messages`);
      setMessages(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // ✅ FETCH PROJECTS (FIXED)
  const fetchProjects = async () => {
    try {
      const res = await axios.get(`${API}/projects`);
      setProjects(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // ✅ ADD / UPDATE PROJECT
  const addOrUpdateProject = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        const res = await axios.put(
          `${API}/projects/${editingId}`,
          project
        );
        setProjects(
          projects.map((p) => (p._id === editingId ? res.data : p))
        );
        alert("Project updated!");
      } else {
        const res = await axios.post(`${API}/projects`, project);
        setProjects([...projects, res.data]);
        alert("Project added!");
      }

      setProject({
        title: "",
        description: "",
        tech: "",
        github: "",
        live: "",
        image: "",
      });
      setEditingId(null);
    } catch (err) {
      console.error(err);
      alert("Error saving project");
    }
  };

  // ✅ DELETE PROJECT
  const deleteProject = async (id) => {
    try {
      await axios.delete(`${API}/projects/${id}`);
      setProjects(projects.filter((p) => p._id !== id));
    } catch (err) {
      console.error(err);
      alert("Error deleting project");
    }
  };

  // ✅ EDIT PROJECT
  const editProject = (proj) => {
    setProject({
      title: proj.title,
      description: proj.description,
      tech: proj.tech,
      github: proj.github,
      live: proj.live,
      image: proj.image || "",
    });
    setEditingId(proj._id);
  };

  // ✅ IMAGE UPLOAD (Cloudinary)
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "your_preset_here"); // ⚠️ change this

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/<cloud_name>/image/upload", // ⚠️ change this
        formData
      );
      setProject({ ...project, image: res.data.secure_url });
    } catch (err) {
      console.error(err);
      alert("Image upload failed");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl">Admin Dashboard</h1>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
          className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Messages */}
      <div className="mb-10">
        <h2 className="text-2xl mb-4">Messages</h2>
        <AnimatePresence>
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-4 mb-4 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p><strong>Name:</strong> {msg.name}</p>
              <p><strong>Email:</strong> {msg.email}</p>
              <p><strong>Message:</strong> {msg.message}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Add / Edit Project */}
      <div className="mb-10">
        <h2 className="text-2xl mb-4">
          {editingId ? "Edit Project" : "Add Project"}
        </h2>

        <form onSubmit={addOrUpdateProject}>
          <input placeholder="Title" className="p-2 m-2 text-black w-full" value={project.title}
            onChange={(e) => setProject({ ...project, title: e.target.value })} />

          <input placeholder="Description" className="p-2 m-2 text-black w-full" value={project.description}
            onChange={(e) => setProject({ ...project, description: e.target.value })} />

          <input placeholder="Tech" className="p-2 m-2 text-black w-full" value={project.tech}
            onChange={(e) => setProject({ ...project, tech: e.target.value })} />

          <input placeholder="GitHub" className="p-2 m-2 text-black w-full" value={project.github}
            onChange={(e) => setProject({ ...project, github: e.target.value })} />

          <input placeholder="Live Link" className="p-2 m-2 text-black w-full" value={project.live}
            onChange={(e) => setProject({ ...project, live: e.target.value })} />

          <input type="file" onChange={uploadImage} className="m-2" />

          {project.image && (
            <img src={project.image} className="w-32 m-2 rounded" />
          )}

          <button className="bg-green-500 px-4 py-2 m-2 rounded">
            {editingId ? "Update Project" : "Add Project"}
          </button>
        </form>
      </div>

      {/* Projects */}
      <div>
        <h2 className="text-2xl mb-4">Projects</h2>
        <AnimatePresence>
          {projects.map((proj) => (
            <motion.div
              key={proj._id}
              className="bg-gray-800 p-4 mb-4 rounded-lg flex justify-between"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div>
                <strong>{proj.title}</strong>
                <p>{proj.tech}</p>
              </div>

              <div className="flex gap-2">
                <button onClick={() => editProject(proj)} className="bg-blue-500 px-3 py-1 rounded">
                  Edit
                </button>
                <button onClick={() => deleteProject(proj._id)} className="bg-red-500 px-3 py-1 rounded">
                  Delete
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Admin;
/*import { useEffect, useState } from "react";
import axios from "axios";

const Admin = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:5000/messages");
      setMessages(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [project, setProject] = useState({
  title: "",
  description: "",
  tech: "",
  github: "",
  live: "",
});

const addProject = async (e) => {
  e.preventDefault();

  try {
    await axios.post("http://127.0.0.1:5000/projects", project);
    alert("Project added!");
  } catch (err) {
    alert("Error adding project");
  }
};

  return (
    <div className="min-h-screen bg-black text-white p-10">

      {/*  ADD LOGOUT BUTTON HERE */
 /*     <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl">Admin Dashboard</h1>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
          className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Messages */
 /*     {messages.map((msg, index) => (
        <div key={index} className="bg-gray-800 p-4 mb-4 rounded-lg">
          <p><strong>Name:</strong> {msg.name}</p>
          <p><strong>Email:</strong> {msg.email}</p>
          <p><strong>Message:</strong> {msg.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Admin;
*/