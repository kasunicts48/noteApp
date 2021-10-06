import React from "react";
import DisplayContent from "./Content/DisplayContent";
import InputTitleAndNote from "./Content/InputTitleAndNote";

export default function Content({ activeNote, onUpdateNote }) {
  if (!activeNote) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "10px",
          width: "80%",
          marginLeft: "10%",
          marginTop: "30%",
          fontWeight: "bold",
          fontSize: "50px",
          border: "solid 1px #eee",
          borderRadius: "5px"
        }}
      >
        No note selected
      </div>
    );
  }

  return (
    <div>
      <InputTitleAndNote activeNote={activeNote} onUpdateNote={onUpdateNote} />
      <DisplayContent activeNote={activeNote} onUpdateNote={onUpdateNote} />
    </div>
  );
}

// import DisplayContent from './Content/DisplayContent'
// import InputTitleAndNote from './Content/InputTitleAndNote'

// <InputTitleAndNote/>
// <DisplayContent/>
