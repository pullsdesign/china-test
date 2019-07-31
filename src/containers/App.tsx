import React from 'react';
import '../assets/fonts/fonts.css';
import './App.scss';

import Header from './/Header/Header';
import Test from './Test/Test';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Test/>
      <Footer/>
    </div>
  );
}

export default App;
