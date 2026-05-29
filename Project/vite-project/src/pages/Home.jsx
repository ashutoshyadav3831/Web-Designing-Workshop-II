function Home() {
  return (
    <div className="container">
      <h1 className="hero-title">
        Student Learning Progress Tracker
      </h1>

      <p className="hero-text">
        Track your learning progress,
        manage study notes, monitor
        roadmap completion, and analyze
        your learning journey using
        React JS.
      </p>

      <div
        style={{
          marginTop: "40px",
        }}
      >
        <h2>Features</h2>

        <ul
          style={{
            marginTop: "20px",
            lineHeight: "2",
            fontSize: "18px",
          }}
        >
          <li>Track Learning Progress</li>
          <li>Roadmap Completion</li>
          <li>Dashboard Analytics</li>
          <li>Study Notes</li>
          <li>Search Topics</li>
          <li>Add/Delete Topics</li>
          <li>Local Storage Support</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;