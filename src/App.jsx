import Header from "./components/Header";
import StudentProfile from "./components/StudentProfile";
import SubjectList from "./components/SubjectList";
import Attendance from "./components/Attendance";
import ExamDetails from "./components/ExamDetails";
import StudentCard from "./components/StudentCard";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const subjects = [
    {
      name: "Artificial Intelligence",
      code: "CS401",
      credits: 4,
      icon: "🤖"
    },
    {
      name: "Machine Learning",
      code: "CS402",
      credits: 4,
      icon: "🧠"
    },
    {
      name: "DevOps",
      code: "CS403",
      credits: 3,
      icon: "⚙️"
    },
    {
      name: "Full Stack Development",
      code: "CS404",
      credits: 4,
      icon: "💻"
    }
  ];

  const student = {
    name: "Gadidasu Sri Sahith",
    rollNo: "2303A52243",
    branch: "Computer Science and Engineering",
    year: "4th Year",
    attendance: 85
  };

  return (
    <div className="app">

      <Header />

      <main className="dashboard">

        {/* Welcome Section */}
        <section className="welcome">
          <div>
            <p className="welcome-small">WELCOME BACK 👋</p>
            <h1>Hello, {student.name}</h1>
            <p>
              Here's your academic overview for the current semester.
            </p>
          </div>

          <div className="welcome-icon">
            🎓
          </div>
        </section>

        {/* Statistics */}
        <section className="stats">

          <div className="stat-card">
            <div className="stat-icon">📚</div>
            <div>
              <span>Subjects</span>
              <h2>{subjects.length}</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <div>
              <span>Attendance</span>
              <h2>{student.attendance}%</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🎯</div>
            <div>
              <span>Academic Year</span>
              <h2>2026-27</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">✅</div>
            <div>
              <span>Status</span>
              <h2>Active</h2>
            </div>
          </div>

        </section>

        {/* Main Grid */}
        <section className="main-grid">

          <StudentProfile
            name={student.name}
            rollNo={student.rollNo}
            branch={student.branch}
            year={student.year}
          />

          <Attendance percentage={student.attendance} />

        </section>

        <SubjectList subjects={subjects} />

        <ExamDetails
          midExam="Completed"
          semesterExam="Upcoming"
        />

        {/* Student Card */}
        <section className="student-section">

          <div className="section-heading">
            <div>
              <p>STUDENT INFORMATION</p>
              <h2>Student Card</h2>
            </div>
          </div>

          <StudentCard student={student} />

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default App;