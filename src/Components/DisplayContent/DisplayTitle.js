//? Title
import React from 'react'

export default function DisplayTitle({activeNote}) {
    // console.log(activeNote)
    return (
        <div>
            <h2>{activeNote.title}</h2>
        </div>
    )
}
