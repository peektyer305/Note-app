import Sidebar from './components/Sidebar.jsx';
import Main from "./components/Main.jsx";
import './App.css';
import { useEffect, useState } from 'react';
import uuid from 'react-uuid';
function App() {
  
  const [notes, setNotes] = useState(() => {
    // ローカルストレージからノートを読み込む
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [activeNote,setActiveNote] = useState();
  //notesを先に初期化してからこれを使わないとエラー出る！何もレンダリングされない。
  useEffect(() =>{
    localStorage.setItem("notes", JSON.stringify(notes));
 }, [notes]);
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
  const onUpdateNote = (updatedNote) =>{
    const updatedNoteArray = notes.map((note) =>{
      if(note.id === updatedNote.id){
        return updatedNote;
      }else{
        return note;
      }
    });

    setNotes(updatedNoteArray);
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
      <Main activeNote = {getActiveNote()} onUpdateNote = {onUpdateNote}/>
    </div>
  );
}

export default App;
