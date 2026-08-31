const mongoose = require("mongoose");
const Internship = require("./models/Internship");
require("dotenv").config({ path: "./backend/.env" });

const internships = [
    {
        title: "Frontend Developer Intern",
        company: "Codveda Technologies",
        location: "Remote",
        duration: "3 Months",
        skills: "HTML, CSS, JavaScript"
    },
    {
        title: "Backend Developer Intern",
        company: "TechNova Solutions",
        location: "Bangalore",
        duration: "6 Months",
        skills: "Node.js, Express, MongoDB"
    },
    {
        title: "Data Analyst Intern",
        company: "Insight Analytics",
        location: "Delhi",
        duration: "4 Months",
        skills: "Python, SQL, Excel"
    },
    {
        title: "Full-Stack Developer Intern",
        company: "WebSphere Technologies",
        location: "Remote",
        duration: "6 Months",
        skills: "React, Node.js, MongoDB"
    },
    {
        title: "UI/UX Design Intern",
        company: "Creative Labs",
        location: "Mumbai",
        duration: "3 Months",
        skills: "Figma, UI Design, UX Research"
    },
    {
        title: "Software Engineer Intern",
        company: "NextGen Systems",
        location: "Hyderabad",
        duration: "6 Months",
        skills: "Java, SQL, Git"
    }
];

async function seedInternships() {
    try {
        await mongoose.connect(process.env.MONGO_ATLAS_URI || process.env.MONGO_URI);

        await Internship.deleteMany({});
        await Internship.insertMany(internships);

        console.log("6 internships inserted successfully!");

        await mongoose.disconnect();
    } catch (error) {
        console.error("Error seeding internships:", error);
        process.exit(1);
    }
}

seedInternships();