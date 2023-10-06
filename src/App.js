import React from 'react';
import './App.css';
import HomePage from './container/home/Index';
import AboutPage from './container/about-us/Index';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUS from './container/contact-us';




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactUS />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
