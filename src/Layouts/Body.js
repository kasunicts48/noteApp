//! Leftside Bar
//! Content
import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import LeftSideBar from "./Body/LeftSideBar";
import Content from "./Body/Content";

export default function Body() {
  const [notes, setnotes] = useState( [] || JSON.parse(localStorage.notes))
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
      localStorage.setItem("notes", JSON.stringify(notes));
  },[notes]);
    


  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    };

    setnotes([newNote, ...notes]);
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNoteArray = notes.map((note) => {
        if(note.id === activeNote) {
            return updatedNote;
        }      
        
        return note;
    });

    setnotes(updatedNoteArray);

  }

  const onDeleteNote = (idToDelete) => {
    // console.log("onDeleteNote", idToDelete)
    setnotes(notes.filter((note) => note.id !== idToDelete));
  };

  const getActiveNote = () =>{
      return notes.find((note) => note.id === activeNote);
  }



  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div style={{ width: "30%" }}>
        <LeftSideBar
          notes={notes}
          onAddNote={onAddNote}
          onDeleteNote={onDeleteNote}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
        />
      </div>
     
      <div style={{ width: "70%" }}>
        <Content activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
      </div>
    </div>
  );
}
