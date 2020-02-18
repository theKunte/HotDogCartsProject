import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/layouts/Navigation';
import Header from './components/Header'
import HomeCards from './components/HomeCards';
import Footer from './components/layouts/Footer';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <HomeCards />
      <Footer />
    </div> 
  );
}

export default App;
