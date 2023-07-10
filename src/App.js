// import logo from './logo.svg';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';

function App() {

  const [mode, setMode] = useState("light");
  const [text, setText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      setText("Enable Light Mode");
      document.body.style.backgroundColor = "gray";
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode("light")
      setText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <Router>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} text={text} />
      <Alerts alert={alert} />
      <div className='container my-3'>
        <Routes>
          <Route path='/' element={<TextForm showAlert={showAlert} heading={"Enter the text to analyze"} mode={mode} />} />
          <Route path='/about'element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
