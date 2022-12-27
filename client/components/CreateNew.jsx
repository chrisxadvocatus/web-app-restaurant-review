import React, { Component, useState } from 'react';
import uuid from "react-uuid";
import './CreateNew.Style.css';

function CreateNew () {

    const [notes, setNotes] = useState([]);

    const onAddNote = () => {
     console.log('hi');
      const newNote = {
       id: uuid(),
       title: " ",
       body:" ",
       date : Date.now(),
      };
      setNotes([newNote, ...notes]);
    };

  return (
  <div className="app-createNew">
  <div className="app-createNew-write">
  <div className = "body"> 
     <input className="input-title" type ="text" id="title" placeholder="Title here" /> 
     <div className="textarea">
         <input className= "textbox" id="body" placeholder="Start here"/> 
     
      <button onClick={onAddNote}>Save</button>
      </div>
    </div>
  </div> 
  </div>
  );
}
export default CreateNew;

