// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {

  const [mode, setMode] = useState("light");
  const [text, setText] = useState("Enable Dark Mode");
  const toggleMode = () =>
  {
    if(mode === "light")
    {
      setMode("dark")
      setText("Enable Light Mode");
      document.body.style.backgroundColor= "gray";
    }
    else
    {
      setMode("light")
      setText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} text={text}/>
      <div className='container my-3'>
        <TextForm heading={"Enter the text to analyze"} mode={mode}/>

        {/* <About/>  */}
      </div>
    </>
  );
}

export default App;
