import "./Main.css";

const Main = ({activeNote}) => {
  if(!activeNote) return(
    <div>Create or select your note.</div>
  )

    return (
    <div className="Maincontainer">
        <section className="main-note-edit">
            <input type="text" value={activeNote.title}/>
            <textarea id=""placeholder="ノート内容を記入" value={activeNote.content}></textarea>
        </section>
        <section className="main-note-preview">
            <h1 className="preview-title">{activeNote.title}</h1>
            <div className="markdown-preview">
              {activeNote.content}
            </div>
        </section>
    </div>
  )
};

export default Main;