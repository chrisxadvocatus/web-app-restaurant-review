import React, { Component, useState, useRef } from 'react';
import uuid from "react-uuid";
import './CreateNew.Style.css';
import SideBar from './SideBar';


function CreateNew () {
    const bodyRef = useRef();
    const titleRef = useRef();
    const [newNote, setNewNote] = useState({});
    const [notes, setNotes] = useState([]);

    const onAddNote = () => {
     console.log('hi');
      const newNoteTemplete = {
       id: uuid(),
       title: titleRef.current.value,
       body:bodyRef.current.value,
       date : Date.now(),
      };
      console.log(bodyRef.current.value);
      console.log(titleRef.current.value);
      console.table(newNoteTemplete);
      const note = Object.assign(newNoteTemplete, {title: bodyRef.current.value, title: titleRef.current.value});
      setNewNote(newNote);
      setNotes([newNote, ...notes]);
      console.log( newNote );
    };

  return (
  <div className = "text-background"> 
   <div className="text-body">
     <input className="input-title" type ="text" id="title" placeholder="Title here" ref={titleRef} /> 
         <input className= "text-box" type="text" id="input"  placeholder="Start here" ref={bodyRef}/> 
     
      <button onClick={onAddNote}>Save</button>
      </div>
  </div>
  );
}
export default CreateNew;

