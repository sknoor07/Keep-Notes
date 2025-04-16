import React from "react";

function CreateArea(props) {
  const [note, setNote] = React.useState({
    title: "",
    body: "",
  });

  function handleNote(event) {
    const { name, value } = event.target;
    setNote((prevval) => {
      return {
        ...prevval,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({ title: "", body: "" });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleNote}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="body"
          onChange={handleNote}
          value={note.body}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
