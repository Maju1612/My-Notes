import React from 'react';
import Note from "./Note"

const Notes = props => {
    return (
        <div className="note-area">
            {props.notes.map(note => (
            <Note name={note.category} text={note.text}/>
            ))}
            
        </div>
    );
}

export default Notes;
