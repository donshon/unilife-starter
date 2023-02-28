import React, {useState} from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Citypage from './pages/Citypage/Citypage';


function App() {


  return (
    <div>
      <BrowserRouter>
      <Header/>

      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/cities" element={<Citypage />}/>
      </Routes>

      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
