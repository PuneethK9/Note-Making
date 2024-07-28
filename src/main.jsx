import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./assets/index.css";
import Header from './components/Header.jsx'
import Notes from './components/Notes.jsx';
import AddNote from './components/AddNote.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
