import React from 'react';
import './App.css'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages';
import Header from './components/Header/Header';
// import Layout from './page/Layout/Layout';
// import Cards from './page/Cards/Card'
import Footer from './components/Footer/Footer';
import About from './components/About';

import Shop from './components/Shop';
import Cart from './page/Cart/Cart';
import Veiw from './page/Veiw/Veiw';


const App = () => {
  return (

    <div className='App'>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Veiw" element={<Veiw />} />
          
         
        </Routes>
        
        <Footer />
      </BrowserRouter>

    </div >

  );
}

export default App;
