import React from 'react';
import Note from "./Note"

const Notes = props => {
    return (
        <div className="note-area">
            {props.notes.map(note => (
                <Note name={note.category} text={note.text} key={note.id} clickDelete={props.clickDelete} id={note.id}/>
            ))}
            
        </div>
    );
}

export default Notes;
