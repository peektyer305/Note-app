import Sidebar from './components/Sidebar.jsx';
import Main from "./components/Main.jsx";
import './App.css';
import { useState } from 'react';
import uuid from 'react-uuid';
function App() {
  const [notes,setNotes] = useState([]);
  const [activeNote,setActiveNote] = useState();
  const onAddNote = () =>{
    console.log("note added.");
    const newNote = {
      id:uuid(),
      title:"new note",
      content:"content of note",
      modDate: Date.now(),
    };
    setNotes([...notes,newNote]);
    console.log(notes);
    
  };
  const deleteNote = (id) =>{
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };
  const getActiveNote = () =>{
    return notes.find((note) => note.id === activeNote);
  };

  return (
    <div className='Appcontainer'>
      <Sidebar 
      onAddNote = {onAddNote} 
      notes = {notes} 
      deleteNote={deleteNote}
      activeNote={activeNote}
      setActiveNote={setActiveNote}
      
      />
      <Main activeNote = {getActiveNote()}/>
    </div>
  );
}

export default App;
