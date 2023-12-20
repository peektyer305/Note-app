import "./Sidebar.css";

const Sidebar = ({onAddNote,notes}) => {
  return (
    <div className="app-sidebar">
         <section className="sidebar-header">
            <h1>ノート</h1>
            <button onClick={onAddNote} >追加</button>   
         </section>
         <section className="sidebar-notes">
        {notes.map((note) => (
            <>
            <div className="sidebar-note">
            <div className="sidebar-note-title">
            <strong>{note.title}</strong>
            <button>削除</button>
            </div>
            <p>{note.content}</p>
            <time dateTime="2023-12-10">{note.modDate}</time>
        </div>
        </>
        ))}
            
         </section>

    </div>
  )
}

export default Sidebar;