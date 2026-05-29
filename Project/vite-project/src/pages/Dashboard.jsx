import { reactRoadmap } from "../data/roadmaps";

function Dashboard() {
  const savedTopics =
    JSON.parse(localStorage.getItem("topics")) ||
    reactRoadmap;

  const totalTopics = savedTopics.length;

  const completedTopics = savedTopics.filter(
    (topic) => topic.completed
  ).length;

  const remainingTopics =
    totalTopics - completedTopics;

  const progress = Math.round(
    (completedTopics / totalTopics) * 100
  );

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

        <div className="card">
          <h2>Remaining</h2>
          <p>{remainingTopics}</p>
        </div>

        <div className="card">
          <h2>Progress</h2>
          <p>{progress}%</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;