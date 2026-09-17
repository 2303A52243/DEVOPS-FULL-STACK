function Attendance({ percentage }) {
  const eligible = percentage >= 75;

  return (
    <div className="attendance-card">

      <div className="attendance-header">
        <div>
          <p className="label">ATTENDANCE</p>
          <h2>Overall Attendance</h2>
        </div>

        <div className="attendance-circle">
          {percentage}%
        </div>
      </div>

      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <div className="attendance-footer">

        <span>
          Minimum required: 75%
        </span>

        <strong className={eligible ? "eligible" : "not-eligible"}>
          {eligible ? "✓ Eligible" : "✕ Not Eligible"}
        </strong>

      </div>

    </div>
  );
}

export default Attendance;