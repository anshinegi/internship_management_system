import InternshipCard from "./InternshipCard";

function InternshipList({ internships }) {
  return (
    <section className="internships-section" id="internships">
      <div className="section-heading">
        <h2>Available Internships</h2>
        <p>Explore opportunities and find the right internship for you.</p>
      </div>

      <div className="internship-grid">
        {internships.map((internship) => (
          <InternshipCard
            key={internship.id}
            internship={internship}
          />
        ))}
      </div>
    </section>
  );
}

export default InternshipList;