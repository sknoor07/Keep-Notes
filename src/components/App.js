import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import Card from "./Card";

function App() {
  return <Card key={notes.key} />;
}

export default App;
