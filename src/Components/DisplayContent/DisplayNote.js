//? Note
import React from 'react'
import ReactMarkdown from "react-markdown";

export default function DisplayNote({activeNote}) {
    // console.log(activeNote)
    return (
        <div style={{marginTop: "10px"}}>
            <ReactMarkdown>{activeNote.body}</ReactMarkdown>
        </div>
    )
}
