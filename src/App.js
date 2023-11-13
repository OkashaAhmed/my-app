// import logo from './logo.svg';
import './App.css';
import Alerts from './components/Alerts';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
// import {Routes,Route,} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [btnText, setBtnText] = useState("dark")
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
  setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      setBtnText('light');
      document.body.style.backgroundColor = '#161c29';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light')
      setBtnText('dark')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");

    }
  }

  return (
    <>
    <Navbar title="zoo_weeee_mama" about="about Mama"mode={mode} toggleMode={toggleMode} btnText={btnText}/>
    <Alerts alert={alert}/>

    <div className="container my-3">
    {/* <Routes>
          <Route exact path="/about" element={<About/>}>
            
          </Route>
          
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Write about yourself" mode={mode}/>}>
          
          </Route>
    </Routes> */}
    
    
    <TextForm showAlert={showAlert} heading="Write about yourself" mode={mode}/>
    </div>
  
    </>
   
  );
}

export default App;
