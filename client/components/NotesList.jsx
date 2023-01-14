import React from "react"

function NotesList( {note} ){
    <div className="body-note">  
     <small>note.id</small>
     <h>note.title</h>
     <span>note.body</span>
     <small>note.date</small>
     <button onClick={deleteNote}>Delete</button>
    </div>

}

export default NotesList;