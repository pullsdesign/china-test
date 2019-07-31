import React from 'react';
import '../assets/fonts/fonts.css';
import './App.scss';

import Header from './/Header/Header';
import TestWrapper from './TestWrapper/TestWrapper';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <TestWrapper/>
      <Footer/>
    </div>
  );
}

export default App;
