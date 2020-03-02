import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import VendorPage from './pages/VendorPage';
import VendorMenu from './pages/VendorMenu';
import VendorIncomingOrder from './pages/VendorIncomingOrder';
import VendorCartLocation from './pages/VendorCartLocation';

function App() {
  return (
    <div className="App">
      <Router>
          <Route path="/vendor" cmponent ={VendorPage} />
          <Route path="/vendorin" component={VendorIncomingOrder} />
          <Route path="/vendormenu" component ={VendorMenu} />
          <Router path="/vendorlocation" component={VendorCartLocation} />
      </Router>
    </div> 
  );
}

export default App;