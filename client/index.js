import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App.jsx';
import styles from './style.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);


function sConsole(event) {
  event.preventDefault();
  let data = document.getElementById("data");
  console.log(data.value);
}

sConsole()