import React from "react";
import Heading from "./LeftSideBar/Heading";
import ItemList from "./LeftSideBar/ItemList";

export default function LeftSideBar({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) {


  const sortedNotes = notes.sort((a,b) => b.lastModified - a.lastModified);

  return (
    <div>
      <Heading onAddNote={onAddNote} />
      {sortedNotes.map((val, key) => {
        return (
          <ItemList
            notes={val}
            key={key}
            onDeleteNote={onDeleteNote}
            activeNote={activeNote}
            setActiveNote={setActiveNote}
          />
        );
      })}
    </div>
  );
}
