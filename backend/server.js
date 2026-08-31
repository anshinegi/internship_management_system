const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth");
const internshipRoutes = require("./routes/internship");
require("dotenv").config({ path: "./backend/.env" });

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true
    })
);
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/internships", internshipRoutes);

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error.message);
    });


// Home / API status route
app.get("/", (req, res) => {
    res.json({
        message: "Internship Management System API is running"
    });
});





// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});