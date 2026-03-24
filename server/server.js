import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Contact from "./models/Contact.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Admin from "./models/Admin.js";
import Project from "./models/Project.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();


app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://portfolio-website-ym27.vercel.app"
  ],
  methods: ["GET", "POST"],
}));
app.use(express.json());

/* ✅ CONNECT MONGODB */
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log(err)); 
  

/* ✅ TEST ROUTE */
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

/* ✅ SAVE CONTACT DATA */
app.post("/contact", async (req, res) => {
  console.log("Request received:", req.body);

  try {
    const newMessage = new Contact(req.body);
    await newMessage.save();

    console.log("Saved to DB");
    res.status(201).send("Message saved ✅");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error saving message ❌");
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  console.log("EMAIL:", email);
  console.log("PASSWORD:", password);

  try {
    const admin = await Admin.findOne({ email });

    console.log("ADMIN FROM DB:", admin); // 👈 ADD THIS

    if (!admin) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    console.log("PASSWORD MATCH:", isMatch); // 👈 ADD THIS

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    res.json({ token: "success" });

  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
});

/* 🔥 ADD THIS HERE 👇 (NEW API) */
app.get("/messages", async (req, res) => {
  try {
    const messages = await Contact.find().sort({ _id: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).send("Error fetching messages");
  }
});

// ADD PROJECT
app.post("/projects", async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.send("Project added ✅");
  } catch (error) {
    res.status(500).send("Error adding project");
  }
});

// GET PROJECTS
app.get("/projects", async (req, res) => {
  try {
    const projects = await Project.find().sort({ _id: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).send("Error fetching projects");
  }
});
app.put("/projects/:id", async (req, res) => {
  const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

app.delete("/projects/:id", async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.send("Deleted");
});

app.get("/create-admin", async (req, res) => {
  const hashedPassword = await bcrypt.hash("123456", 10);

  const admin = new Admin({
    email: "admin@gmail.com",
    password: hashedPassword,
  });

  await admin.save();

  res.send("Admin created ✅");
});

/* ✅ START SERVER */
app.listen(5000, () => {
  console.log("Server running on port 5000 🚀");
});