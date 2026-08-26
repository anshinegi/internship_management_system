function InternshipCard({ internship }) {
  return (
    <div className="internship-card">
      <h3>{internship.title}</h3>

      <p className="company">{internship.company}</p>

      <div className="internship-details">
        <p>📍 {internship.location}</p>
        <p>⏱ {internship.duration}</p>
        <p>🛠 {internship.skills}</p>
      </div>

      <button className="apply-button">
        View Internship
      </button>
    </div>
  );
}

export default InternshipCard;