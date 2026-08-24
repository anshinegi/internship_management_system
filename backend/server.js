const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 5000;

app.use(express.json());
app.use(cors());

// Home / API status route
app.get("/", (req, res) => {
    res.json({
        message: "Internship Management System API is running"
    });
});


// Internship data
const internships = [
    {
        id: 1,
        title: "Frontend Developer Intern",
        company: "Codveda Technologies",
        location: "Remote",
        duration: "3 Months",
        skills: "HTML, CSS, JavaScript"
    },
    {
        id: 2,
        title: "Backend Developer Intern",
        company: "TechNova Solutions",
        location: "Bangalore",
        duration: "6 Months",
        skills: "Node.js, Express, MongoDB"
    },
    {
        id: 3,
        title: "Data Analyst Intern",
        company: "Insight Analytics",
        location: "Delhi",
        duration: "4 Months",
        skills: "Python, SQL, Excel"
    },
    {
        id: 4,
        title: "Full-Stack Developer Intern",
        company: "WebSphere Technologies",
        location: "Remote",
        duration: "6 Months",
        skills: "React, Node.js, MongoDB"
    },
    {
        id: 5,
        title: "UI/UX Design Intern",
        company: "Creative Labs",
        location: "Mumbai",
        duration: "3 Months",
        skills: "Figma, UI Design, UX Research"
    },
    {
        id: 6,
        title: "Software Engineer Intern",
        company: "NextGen Systems",
        location: "Hyderabad",
        duration: "6 Months",
        skills: "Java, SQL, Git"
    }
];


// Get all internships
app.get("/api/internships", (req, res) => {
    res.json(internships);
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});