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
            <strong>タイトル</strong>
            <button>削除</button>
            </div>
            <p>Vanitas vanitatum.</p>
            <time dateTime="2023-12-10">2023.12.10</time>
        </div>
        </>
        ))}
            
         </section>

    </div>
  )
}

export default Sidebar;