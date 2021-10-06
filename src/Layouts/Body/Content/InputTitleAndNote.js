//? input Title
//? Input Note
import React from 'react'
import AddNote from '../../../Components/InputTitleAndNote/AddNote'
import AddTitle from '../../../Components/InputTitleAndNote/AddTitle'

export default function InputTitleAndNote({activeNote, onUpdateNote}) {
    return (
        <div>
            <AddTitle activeNote={activeNote} onUpdateNote={onUpdateNote} />
            <AddNote activeNote={activeNote} onUpdateNote={onUpdateNote} />
        </div>
    )
}
