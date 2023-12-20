import "./Main.css";

const Main = () => {
  return (
    <div className="Maincontainer">
        <section className="main-note-edit">
            <input type="text" />
            <textarea id=""placeholder="ノート内容を記入"></textarea>
        </section>
        <section className="main-note-preview">
            <h1 className="preview-title">vanitas vanitatum, et omnia vanitas</h1>
            <div className="markdown-preview">ματαιότης ματαιοτήτων, τὰ πάντα ματαιότης

                    ——七十人訳聖書

                ματαιοτηϲ ματαιοτητων · τα παντα μανταιοτηϲ

                            ——シナイ写本

                ματαιότηϲ ματαιοτήτων τὰ πά-τα ματαιότηϲ

            ——ヴァチカン写本
            </div>
        </section>
    </div>
  )
};

export default Main;