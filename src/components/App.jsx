import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = React.useState([]);

  function addNote(newnote) {
    setNotes((prevval) => {
      return [...prevval, newnote];
    });
  }

  function deleteNote(id) {
    setNotes((prevval) => {
      return prevval.filter((noteItem, index) => {
        return index != id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItems, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItems.title}
            content={noteItems.body}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
