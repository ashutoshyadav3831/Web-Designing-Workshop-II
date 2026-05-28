import { useState, useEffect } from "react";
import { reactRoadmap } from "../data/roadmaps";

function Roadmap() {

  // Load saved topics
  const [topics, setTopics] = useState(() => {
    const savedTopics =
      localStorage.getItem("topics");

    return savedTopics
      ? JSON.parse(savedTopics)
      : reactRoadmap;
  });

  // Save topics
  useEffect(() => {
    localStorage.setItem(
      "topics",
      JSON.stringify(topics)
    );
  }, [topics]);

  // Count completed topics
  const completedTopics = topics.filter(
    (topic) => topic.completed
  ).length;

  // Progress %
  const progress = Math.round(
    (completedTopics / topics.length) * 100
  );

  // Toggle completion
  const toggleComplete = (id) => {
    const updatedTopics = topics.map((topic) =>
      topic.id === id
        ? {
            ...topic,
            completed: !topic.completed,
          }
        : topic
    );

    setTopics(updatedTopics);
  };

  // Reset progress
  const resetProgress = () => {
    const resetTopics = topics.map((topic) => ({
      ...topic,
      completed: false,
    }));

    setTopics(resetTopics);
  };

  return (
    <div className="container">

      <h1>React Roadmap Tracker</h1>

      <h2>Progress: {progress}%</h2>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${progress}%`,
          }}
        ></div>
      </div>

      {topics.map((item) => (
        <div
          key={item.id}
          className="topic"
        >
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() =>
              toggleComplete(item.id)
            }
          />

          <span
            style={{
              textDecoration:
                item.completed
                  ? "line-through"
                  : "none",

              color:
                item.completed
                  ? "#777"
                  : "white",
            }}
          >
            {item.topic}
          </span>
        </div>
      ))}

      <button onClick={resetProgress}>
        Reset Progress
      </button>

    </div>
  );
}

export default Roadmap;