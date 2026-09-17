function SubjectList({ subjects }) {
  return (
    <section className="subjects-section" id="subjects">

      <div className="section-heading">
        <div>
          <p>ACADEMICS</p>
          <h2>My Subjects</h2>
        </div>

        <span>{subjects.length} Subjects</span>
      </div>

      <div className="subjects-grid">

        {subjects.map((subject) => (
          <div className="subject-card" key={subject.code}>

            <div className="subject-icon">
              {subject.icon}
            </div>

            <div className="subject-content">
              <span>{subject.code}</span>
              <h3>{subject.name}</h3>
              <p>{subject.credits} Credits</p>
            </div>

            <div className="arrow">
              →
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default SubjectList;