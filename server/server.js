import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Contact from "./models/Contact.js";

const app = express();

app.use(cors({
  origin: "http://localhost:5173", // 👈 add this
}));app.use(express.json());

/* ✅ CONNECT MONGODB (LOCAL - COMPASS) */
mongoose.connect("mongodb://localhost:27017/portfolio")
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log(err));

/* ✅ TEST ROUTE */
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

/* ✅ SAVE CONTACT DATA */
app.post("/contact", async (req, res) => {
  console.log("Request received:", req.body); // 👈 ADD THIS

  try {
    const newMessage = new Contact(req.body);
    await newMessage.save();

    console.log("Saved to DB"); // 👈 ADD THIS
    res.status(201).send("Message saved ✅");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error saving message ❌");
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000 🚀");
});