// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Homepage from './Components/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewall from './Components/Viewall';
import Aboutus from './Components/aboutus';
import Login from './Components/login';
import Signup from './Components/signup';

function App() {
  
  return (
   <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Homepage/>} />
    <Route path="/Viewall" element={<Viewall/>} />
    <Route path="/Aboutus" element={<Aboutus/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />

      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
