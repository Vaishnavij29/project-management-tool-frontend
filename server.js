import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

// Import routes
import authRoutes from "./routes/auth.js"; // Ensure the correct path

// Initialize Express app
const app = express();

// Middleware
dotenv.config();
app.use(cors());
app.use(express.json()); // Allow JSON data

// Routes
app.use("/api/auth", authRoutes); // This should come after 'app' is declared

// Database Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.get("/", (req, res) => {
  res.send("Welcome to the Project Management API");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});