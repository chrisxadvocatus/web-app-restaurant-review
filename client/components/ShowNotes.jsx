import React, {useEffect, useState } from 'react'
import "./ShowNotes.css"
import axios from "axios"


function ShowNotes() {
  const [notes, setNotes] = useState([]);
 
  useEffect(()=>{
    axios.get('http://localhost:8050/api/db')
    .then((res)=>{
      setNotes(res.data);
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  function deleteNote(e,noteId){
    e.preventDefault();
    
    const filterNotes = notes.filter(item => item.id !== noteId); 
    const deletedNote = notes.find(deletedNote => deletedNote.id === noteId);
    setNotes(filterNotes);

    axios.delete(`http://localhost:8050/api/db/${noteId}`)  
    .then(res => res)  
    .catch(err=>{
      if(!deletedNote)setNotes([...notes, deletedNote]);
      }
    )
  }

   return (
     <div className='background-notes'> 
     <h1>Notes</h1>
     
     {notes.map( note =>{return <div key={note.id} className = "body-note">
        
           <h1> { note.title } </h1>
           <span> { note.body } </span>
           <span>noteId: { note.id } </span>
           <button onClick={(e)=>deleteNote(e,note.id)}> Delete</button>
        
        </div>})}
    </div>

)
}

export default  ShowNotes;

