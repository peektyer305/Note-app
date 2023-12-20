import "./Main.css";

const Main = () => {
    return (
    <div className="Maincontainer">
        <section className="main-note-edit">
            <input type="text" />
            <textarea id=""placeholder="ノート内容を記入"></textarea>
        </section>
        <section className="main-note-preview">
            <h1 className="preview-title">Vanitas vanitatum.</h1>
            <div className="markdown-preview">
            </div>
        </section>
    </div>
  )
};

export default Main;