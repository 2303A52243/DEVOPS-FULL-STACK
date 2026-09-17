function ExamDetails({ midExam, semesterExam }) {
  return (
    <section className="exam-section" id="exams">

      <div className="section-heading">
        <div>
          <p>EXAMINATION</p>
          <h2>Exam Details</h2>
        </div>
      </div>

      <div className="exam-grid">

        <div className="exam-card">

          <div className="exam-icon">
            📝
          </div>

          <div>
            <span>Mid Examination</span>
            <h3>{midExam}</h3>
          </div>

          <div className="exam-status completed">
            ✓
          </div>

        </div>

        <div className="exam-card">

          <div className="exam-icon">
            🎯
          </div>

          <div>
            <span>Semester Examination</span>
            <h3>{semesterExam}</h3>
          </div>

          <div className="exam-status upcoming">
            →
          </div>

        </div>

      </div>

    </section>
  );
}

export default ExamDetails;