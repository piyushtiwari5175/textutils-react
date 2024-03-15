//import logo from './logo.svg'; 
import './App.css';
import Navbar from './Components/Navbar.jsx'; 
import Textform from './Components/Textform.jsx'; 
import { useState } from 'react';
import Alert from './Components/Alert.jsx'; 
import About from './Components/about.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert("Enabled dark mode","success");

    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Enabled light mode","success");
    }
  }

  return (
    <>
      <Router>
      <Navbar title="TextUtils" abouttext="about" mode={mode} toggleMode={togglemode} />
      <Alert alert= {alert} />

      <div className="container">

        <Routes>
          <Route path="/about" element={<About />} />

          <Route path="/" element={<Textform showAlert={showAlert} heading="Enter the Text to analyze" mode={mode} />} />
        </Routes>




      </div>
      </Router>


    </>
  );
}

export default App;
