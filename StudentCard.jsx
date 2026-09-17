function StudentCard({ student }) {
  const eligible = student.attendance >= 75;

  return (
    <div className="student-card">

      <div className="student-card-left">

        <div className="large-avatar">
          {student.name.charAt(0)}
        </div>

        <div>
          <h2>{student.name}</h2>

          <p>
            {student.rollNo} • {student.branch}
          </p>

          <span className={eligible ? "eligible" : "not-eligible"}>
            {eligible ? "● Eligible for Exams" : "● Not Eligible"}
          </span>
        </div>

      </div>

      <button className="profile-button">
        View Profile →
      </button>

    </div>
  );
}

export default StudentCard;