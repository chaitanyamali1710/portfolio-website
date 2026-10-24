import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Contact from "./models/Contact.js";
import bcrypt from "bcryptjs";
import Admin from "./models/Admin.js";
import Project from "./models/Project.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const memoryStore = {
  contacts: [],
  projects: [],
  admin: null,
};

const isMongoConnected = () => mongoose.connection.readyState === 1;

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://127.0.0.1:5173",
      "https://portfolio-website-ym27.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.options(/.*/, cors());
app.use(express.json());

/* ✅ CONNECT MONGODB */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => {
    console.log("MongoDB not available, using in-memory fallback for local dev");
    console.log(err.message);
  });

/* ✅ TEST ROUTE */
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

/* ✅ SAVE CONTACT DATA */
app.post("/contact", async (req, res) => {
  console.log("Request received:", req.body);

  try {
    if (isMongoConnected()) {
      const newMessage = new Contact(req.body);
      await newMessage.save();
      console.log("Saved to DB");
      return res.status(201).json(newMessage);
    }

    const savedMessage = {
      _id: Date.now().toString(),
      ...req.body,
    };

    memoryStore.contacts.unshift(savedMessage);
    return res.status(201).json(savedMessage);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error saving message ❌");
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!isMongoConnected()) {
      if (!memoryStore.admin) {
        memoryStore.admin = {
          email: "admin@gmail.com",
          password: await bcrypt.hash("123456", 10),
        };
      }

      if (memoryStore.admin.email !== email) {
        return res.status(400).json({ message: "User not found" });
      }

      const isMatch = await bcrypt.compare(password, memoryStore.admin.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid password" });
      }

      return res.json({ token: "success" });
    }

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    res.json({ token: "success" });
  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/messages", async (req, res) => {
  try {
    if (!isMongoConnected()) {
      return res.json(memoryStore.contacts);
    }

    const messages = await Contact.find().sort({ _id: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).send("Error fetching messages");
  }
});

app.post("/projects", async (req, res) => {
  try {
    if (!isMongoConnected()) {
      const project = {
        _id: Date.now().toString(),
        ...req.body,
      };
      memoryStore.projects.unshift(project);
      return res.json(project);
    }

    const project = new Project(req.body);
    await project.save();
    res.json(project);
  } catch (error) {
    res.status(500).send("Error adding project");
  }
});

app.get("/projects", async (req, res) => {
  try {
    if (!isMongoConnected()) {
      return res.json(memoryStore.projects);
    }

    const projects = await Project.find().sort({ _id: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).send("Error fetching projects");
  }
});

app.put("/projects/:id", async (req, res) => {
  try {
    if (!isMongoConnected()) {
      const projectIndex = memoryStore.projects.findIndex((project) => project._id === req.params.id);
      if (projectIndex === -1) {
        return res.status(404).json({ message: "Project not found" });
      }

      memoryStore.projects[projectIndex] = {
        ...memoryStore.projects[projectIndex],
        ...req.body,
      };

      return res.json(memoryStore.projects[projectIndex]);
    }

    const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(500).send("Error updating project");
  }
});

app.delete("/projects/:id", async (req, res) => {
  try {
    if (!isMongoConnected()) {
      memoryStore.projects = memoryStore.projects.filter((project) => project._id !== req.params.id);
      return res.send("Deleted");
    }

    await Project.findByIdAndDelete(req.params.id);
    res.send("Deleted");
  } catch (error) {
    res.status(500).send("Error deleting project");
  }
});

app.get("/create-admin", async (req, res) => {
  try {
    if (!isMongoConnected()) {
      memoryStore.admin = {
        email: "admin@gmail.com",
        password: await bcrypt.hash("123456", 10),
      };
      return res.send("Admin created ✅");
    }

    const hashedPassword = await bcrypt.hash("123456", 10);

    const admin = new Admin({
      email: "admin@gmail.com",
      password: hashedPassword,
    });

    await admin.save();

    res.send("Admin created ✅");
  } catch (err) {
    console.log(err);
    res.send("Error creating admin");
  }
});

/* ✅ START SERVER */
app.listen(5000, () => {
  console.log("Server running on port 5000 🚀");
});