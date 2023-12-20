import Sidebar from './components/Sidebar.jsx';
import Main from "./components/Main.jsx";
import './App.css';
import { useState } from 'react';

function App() {
  const [notes,setNotes] = useState([]);
  const onAddNote = () =>{
    console.log("note added.");
    const newNote = {
      id:1,
      title:"new note",
      content:"content of note",
      modDate: Date.now(),
    };
    setNotes([...notes,newNote]);
    console.log(notes);
    
  };

  return (
    <div className='Appcontainer'>
      <Sidebar onAddNote = {onAddNote} notes = {notes}/>
      <Main />
    </div>
  );
}

export default App;
