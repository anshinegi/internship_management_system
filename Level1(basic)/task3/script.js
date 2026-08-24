const internshipList = document.getElementById("internship-list");

async function fetchInternships() {
    try {

        const response = await fetch(
            "http://localhost:5000/api/internships"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch internship data");
        }

        const internships = await response.json();

        displayInternships(internships);

    } catch (error) {

        internshipList.innerHTML = `
            <div class="loading">
                Unable to load internships. Please try again later.
            </div>
        `;

        console.error("Error:", error);
    }
}

function displayInternships(internships) {

    internshipList.innerHTML = "";

    internships.forEach((internship) => {

        const card = document.createElement("div");

        card.classList.add("internship-card");

        card.innerHTML = `
            <h3>${internship.title}</h3>

            <p class="company-name">
                ${internship.company}
            </p>

            <p class="internship-info">
                📍 ${internship.location}<br>
                ⏱ ${internship.duration}<br>
                💻 ${internship.skills}
            </p>

            <a href="#" class="view-button">
                View Details
            </a>
        `;

        internshipList.appendChild(card);
    });
}

fetchInternships();