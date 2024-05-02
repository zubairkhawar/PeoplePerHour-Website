import React from 'react';
import Header from './components/header/Header'
import Footer from './components/footer/footer';
import Home from './components/home/Home';
import Navbar from './components/navbar/navbar';
import Header1 from './components/header/Header1';

function App() {
  return (
    <div className="App">
      <Header1 /> 
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
