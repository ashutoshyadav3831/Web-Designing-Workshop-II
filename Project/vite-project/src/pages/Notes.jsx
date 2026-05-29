import { useState, useEffect } from "react";

function Notes() {
  const [notes, setNotes] = useState(
    localStorage.getItem("notes") || ""
  );

  useEffect(() => {
    localStorage.setItem("notes", notes);
  }, [notes]);

  const clearNotes = () => {
    setNotes("");
  };

  const wordCount =
    notes.trim() === ""
      ? 0
      : notes.trim().split(/\s+/).length;

  const charCount = notes.length;

  return (
    <div className="container">
      <h1>Study Notes</h1>

      <p>
        Words: {wordCount} | Characters:{" "}
        {charCount}
      </p>

      <textarea
        value={notes}
        onChange={(e) =>
          setNotes(e.target.value)
        }
        placeholder="Write your notes here..."
      />

      <br />

      <button onClick={clearNotes}>
        Clear Notes
      </button>
    </div>
  );
}

export default Notes;