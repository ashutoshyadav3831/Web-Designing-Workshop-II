import { reactRoadmap } from "../data/roadmaps";

function Dashboard() {

  // Get saved topics
  const savedTopics =
    JSON.parse(localStorage.getItem("topics"))
    || reactRoadmap;

  // Total topics
  const totalTopics = savedTopics.length;

  // Completed topics
  const completedTopics =
    savedTopics.filter(
      (topic) => topic.completed
    ).length;

  return (
    <div className="container">

      <h1>Dashboard</h1>

      <div className="card-container">

        <div className="card">
          <h2>Total Topics</h2>

          <p>{totalTopics}</p>
        </div>

        <div className="card">
          <h2>Completed</h2>

          <p>{completedTopics}</p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;