import React from 'react';
import './App.css';
import Footer from './Footer'
import MainContent from './MainContent';
import Header from './Header';
import logo from './logo.svg';

function App() {
  return (
    <div class="app-page">     
      <Header />
      <br /><br />
      <MainContent />
      <Footer />
    </div> 
  );
}

export default App;
