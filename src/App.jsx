import Sidebar from './components/Sidebar.jsx';
import Main from "./components/Main.jsx";
import './App.css';
import { useState } from 'react';
import uuid from 'react-uuid';
function App() {
  const [notes,setNotes] = useState([]);
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
  const deleteNote = () =>{

  };

  return (
    <div className='Appcontainer'>
      <Sidebar onAddNote = {onAddNote} notes = {notes} deleteNote={deleteNote}/>
      <Main />
    </div>
  );
}

export default App;
