import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
    </div> 
  );
}

export default App;
