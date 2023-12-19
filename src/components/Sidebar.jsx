import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="app-sidebar">
         <section className="sidebar-header">
            <h1>ノート</h1>
            <button className="addbutton">追加</button>   
         </section>
         <section className="sidebar-notes">
            <div className="sidebar-note">
                <div className="sidebar-note-title">
                <strong>タイトル</strong>
                <button>削除</button>
                </div>
                <p>Vanitas vanitatum.</p>
                <time dateTime="2023-12-10">2023.12.10</time>
            </div>
         </section>

    </div>
  )
}

export default Sidebar;