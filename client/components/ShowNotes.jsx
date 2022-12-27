import React from 'react'


function Show({ notes }) {
    return (
        <div className="app-notes-header">
            <h1>Notes</h1>
      {notes.map((note) => ( 
      <div className="app-notes">
       <div className="notes-title">
        <div>{note.title}</div>
        <button>Delete</button>
        <div className="notes-date">Date {note.date}</div>

       </div>
      </div> 
      ))} 
    </div>
);
}