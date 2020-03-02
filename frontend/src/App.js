import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/layouts/Navigation';
import Footer from './components/layouts/Footer';
import Home from './pages/Home';
import CartLocations from './pages/CartLocations';
import MenuPage from './pages/MenuPage';
import VendorPage from './pages/VendorPage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
          <Route exact path="/" component={Home} />
          <Route path="/cart-locations" component={CartLocations} />
          <Route path="/menu" component={MenuPage} />
          <Route path="/admin" component={AdminPage} />
          <Route path="/vendor" component={VendorPage} />
          <Route path="/login" component={LoginPage} />
      </Router>
      <Footer />
    </div> 
  );
}

export default App;
