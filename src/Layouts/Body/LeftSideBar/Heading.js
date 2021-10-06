//? Heading (Notes)
//? Add Button
import React from 'react'
import AddButton from '../../../Components/HeadingandAdd/AddButton'
import HeadingTitle from '../../../Components/HeadingandAdd/HeadingTitle'

export default function Heading({onAddNote}) {
    return (
        <div style={{display: "flex", justifyContent: "space-between", marginBottom: "15px", marginTop: "10px"}}>
            <HeadingTitle/>
            <AddButton onAddNote={onAddNote} />
        </div>
    )
}
