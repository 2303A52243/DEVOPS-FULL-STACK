function StudentProfile({ name, rollNo, branch, year }) {
  return (
    <div className="profile-card">

      <div className="profile-top">
        <div className="profile-avatar">
          {name.charAt(0)}
        </div>

        <div>
          <p className="label">STUDENT PROFILE</p>
          <h2>{name}</h2>
          <span className="student-status">● Active Student</span>
        </div>
      </div>

      <div className="profile-details">

        <div>
          <span>Roll Number</span>
          <strong>{rollNo}</strong>
        </div>

        <div>
          <span>Branch</span>
          <strong>{branch}</strong>
        </div>

        <div>
          <span>Academic Year</span>
          <strong>{year}</strong>
        </div>

      </div>

    </div>
  );
}

export default StudentProfile;