const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const http = require("http");
const { Server } = require("socket.io");

const authRoutes = require("./routes/auth");
const internshipRoutes = require("./routes/internship");
require("dotenv").config({ path: "./.env" });

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: FRONTEND_URL,
        credentials: true
    }
});

const PORT = process.env.PORT || 5000;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

// Middleware
app.use(express.json());
app.use(
    cors({
        origin: FRONTEND_URL,
        credentials: true
    })
);
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/internships", internshipRoutes);

// WebSocket connection
io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("chatMessage", (message) => {
        io.emit("chatMessage", message);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_ATLAS_URI || process.env.MONGO_URI)
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
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});