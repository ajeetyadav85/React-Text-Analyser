
import './App.css';
import Navbar from "./components/Navbar";
import Form1 from './components/Form1';
import { useState } from 'react';
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Alert from './components/Alert'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {

const [mode,setMode]=useState(null);
const [alert,setAlert]=useState(null);

  const toggleMode =()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='#fff';
      showAlert('Success','Light Mode Enabled');
      setInterval(() => {
        
        document.title='Text-Utils';
      }, 2000);
      setInterval(()=>{
        document.title='Text-Analyzer';
      },1000);

    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert('Success','Dark Mode Enabled');
      document.title='Dark Mode';
    
    }
  }

  const showAlert=(type,msg)=>{
      setAlert({
        type:type,
        message:msg
      });
      setTimeout(() => {
        setAlert(null);
      }, 2500);
  }

  return (
   
    <div className=''>
      <Router>
      <Navbar togglemode={toggleMode} mode={mode}/>
      <Alert alert={alert}/>
      <Routes>          
          <Route path="/" element={<Form1/>} mode={mode}>
          </Route>
        </Routes>
      <ToastContainer/>
      </Router>
    </div>
    
  );
}

Navbar.defaultProps={
  title:'Navbar '
}

export default App;
