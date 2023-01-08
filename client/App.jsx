import React, { Component, useState } from 'react';
import CreateNew from "./components/CreateNew";
import uuid from "react-uuid";
import ShowNotes from "./components/ShowNotes";



function App() {

    return(
      <div className="main"> 

    <CreateNew />
     <ShowNotes />
      </div>
    );
}

export default App;
 