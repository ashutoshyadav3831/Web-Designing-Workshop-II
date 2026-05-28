import { useState, useEffect } from "react";

function Notes() {

  const [notes, setNotes] = useState(
    localStorage.getItem("notes") || ""
  );

  useEffect(() => {
    localStorage.setItem("notes", notes);
  }, [notes]);

  return (
    <div style={{ padding: "30px" }}>
      <h1>Notes</h1>

      <textarea
        rows="10"
        cols="50"
        value={notes}
        onChange={(e) =>
          setNotes(e.target.value)
        }
      />
    </div>
  );
}

export default Notes;