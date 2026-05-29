import { useState, useEffect } from "react";
import { reactRoadmap } from "../data/roadmaps";

function Roadmap() {
  const [topics, setTopics] = useState(() => {
    const savedTopics = localStorage.getItem("topics");

    return savedTopics
      ? JSON.parse(savedTopics)
      : reactRoadmap;
  });

  const [search, setSearch] = useState("");
  const [newTopic, setNewTopic] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "topics",
      JSON.stringify(topics)
    );
  }, [topics]);

  const completedTopics = topics.filter(
    (topic) => topic.completed
  ).length;

  const progress = Math.round(
    (completedTopics / topics.length) * 100
  );

  const toggleComplete = (id) => {
    setTopics(
      topics.map((topic) =>
        topic.id === id
          ? {
              ...topic,
              completed: !topic.completed,
            }
          : topic
      )
    );
  };

  const addTopic = () => {
    if (newTopic.trim() === "") return;

    setTopics([
      ...topics,
      {
        id: Date.now(),
        topic: newTopic,
        completed: false,
      },
    ]);

    setNewTopic("");
  };

  const deleteTopic = (id) => {
    setTopics(
      topics.filter(
        (topic) => topic.id !== id
      )
    );
  };

  const resetProgress = () => {
    setTopics(
      topics.map((topic) => ({
        ...topic,
        completed: false,
      }))
    );
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

      <input
        type="text"
        placeholder="Search Topic..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        style={{
          padding: "10px",
          marginBottom: "15px",
          width: "300px",
        }}
      />

      <br />

      <input
        type="text"
        placeholder="Add New Topic"
        value={newTopic}
        onChange={(e) =>
          setNewTopic(e.target.value)
        }
        style={{
          padding: "10px",
          width: "300px",
        }}
      />

      <button
        onClick={addTopic}
        style={{ marginLeft: "10px" }}
      >
        Add Topic
      </button>

      <br />
      <br />

      {topics
        .filter((topic) =>
          topic.topic
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
        )
        .map((item) => (
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

            <button
              onClick={() =>
                deleteTopic(item.id)
              }
              style={{
                marginLeft: "auto",
              }}
            >
              Delete
            </button>
          </div>
        ))}

      <button onClick={resetProgress}>
        Reset Progress
      </button>

      {progress === 100 && (
        <h2
          style={{
            marginTop: "20px",
            color: "#00ff88",
          }}
        >
          🎉 Congratulations! Roadmap Completed
        </h2>
      )}
    </div>
  );
}

export default Roadmap;