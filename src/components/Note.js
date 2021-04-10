import React from 'react';

const Note = props => {
    return (
            <div className="note" id="1">
            <div className="note-header">
                <h3 className="note-title">{props.name}</h3>
                <button className="delete-note">
                    <i className="fas fa-times icon" aria-hidden="true"></i>
                </button>
            </div>
            <div className="note-body">
                <p>{props.text}</p>
            </div>
    </div>
    );
}

export default Note;
