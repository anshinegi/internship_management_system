const express = require("express");
const Internship = require("../models/Internship");

const router = express.Router();

// Get all internships
router.get("/", async (req, res) => {
    try {
        const internships = await Internship.find().sort({ createdAt: -1 });

        res.json(internships);
    } catch (error) {
        console.error("Error fetching internships:", error);

        res.status(500).json({
            message: "Failed to fetch internships"
        });
    }
});

module.exports = router;