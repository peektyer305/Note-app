import "./Main.css";
import {ReactMarkdown} from "react-markdown";

  const Main = ({activeNote, onUpdateNote}) => {
  const onEditNote = (key, value) =>{
    onUpdateNote({
      ...activeNote,
      [key]: value,
      modDate: Date.now(),
    });
  };

  if(!activeNote) return(
    <div>Create or select your note.</div>
  )

    return (
    <div className="Maincontainer">
        <section className="main-note-edit">
            <input 
            id="title"
            type="text" 
            value={activeNote.title} 
            onChange={(e) => onEditNote("title",e.target.value) }/>

            <textarea 
            id="content"
            placeholder="ノート内容を記入" 
            value={activeNote.content} 
            onChange={(e) => onEditNote("content",e.target.value) }
            >

            </textarea>
        </section>
        <section className="main-note-preview">
            <h1 className="preview-title">{activeNote.title}</h1>
            <ReactMarkdown className="markdown-preview">
              {activeNote.content}
            </ReactMarkdown>
        </section>
    </div>
  )
};

export default Main;