import React from 'react';

const Note = props => {
    let noteClassName = "note";
    
    if (props.name === "Zakupy") {
        noteClassName += " note-shopping"
    } else if (props.name==="Praca") {
         noteClassName += " note-work"
    } else {
        noteClassName += " note-other"
    }

    return (
        
        <div className={noteClassName} >
            <div className="note-header">
                <h3 className="note-title">{props.name}</h3>
                <button className="delete-note" onClick={()=>props.clickDelete(props.id)}>
                    <i className="fas fa-times icon" aria-hidden="true"></i>
                </button>
            </div>
            <div className="note-body">
                <pre>{props.text}</pre>
            </div>
    </div>
    );
}

export default Note;
