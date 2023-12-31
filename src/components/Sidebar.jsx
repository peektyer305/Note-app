import "./Sidebar.css";

const Sidebar = ({onAddNote,notes,deleteNote,activeNote,setActiveNote}) => {

const sortedNotes = notes.sort((a,b) => b.modDate - a.modDate)

  return (
    <div className="app-sidebar">
         <section className="sidebar-header">
            <h1>ノート</h1>
            <button onClick={onAddNote} >追加</button>   
         </section>
         <section className="sidebar-notes">
        {sortedNotes.map((note) => (
            
            <div 
            className={`sidebar-note ${note.id === activeNote&& "active"}`} key = {note.id}
            onClick={()=>setActiveNote(note.id)}>
            <header className="sidebar-note-title">
            <strong>{note.title}</strong>
            <button className="deletebutton" onClick={()=>deleteNote(note.id)}>削除</button>
            </header>
            <p>{note.content}</p>
            <time dateTime={new Date(note.modDate).toLocaleDateString("ja-JP")}>{new Date(note.modDate).toLocaleDateString("ja-JP")}</time>
        </div>
        
        ))}
            
         </section>

    </div>
  )
}

export default Sidebar;