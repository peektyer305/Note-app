import Sidebar from './components/Sidebar.jsx';
import Main from "./components/Main.jsx";
import './App.css';

function App() {
  const onAddNote = () =>{
    console.log("note added.")
  };

  return (
    <div className='Appcontainer'>
      <Sidebar onAddNote = {onAddNote}/>
      <Main />
    </div>
  );
}

export default App;
