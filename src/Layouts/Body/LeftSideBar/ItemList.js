//? Single
import React from "react";
import SingleItem from "../../../Components/ItemList/SingleItem";

export default function ItemList({
  notes,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) {
  return (
    <div>
      <SingleItem
        notes={notes}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
    </div>
  );
}
