<<<<<<< HEAD
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import VendorPage from './pages/VendorPage';
import VendorMenu from './pages/VendorMenu';
import VendorIncomingOrder from './pages/VendorIncomingOrder';
import VendorCartLocation from './pages/VendorCartLocation';
import Navigation from './components/layouts/Navigation';
import Footer from './components/layouts/Footer';
import Home from './pages/Home';
import CartLocations from './pages/CartLocations';
import MenuPage from './pages/MenuPage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

=======
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import VendorLogOut from "./pages/VendorLogOut";
import VendorPage from "./pages/VendorPage";
import VendorMenu from "./pages/VendorMenu";
import VendorIncomingOrder from "./pages/VendorIncomingOrder";
import VendorCartLocation from "./pages/VendorCartLocation";
import Navigation from "./components/layouts/Navigation";
import Footer from "./components/layouts/Footer";
import Home from "./pages/Home";
import CartLocations from "./pages/CartLocations";
import MenuPage from "./pages/MenuPage";
import Cart from "./pages/Cart";
import AdminVendor from "./pages/AdminVendor";
import LoginPage from "./pages/LoginPage";
import AdminAddCart from "./pages/AdminAddCart";
import AdminLog from "./pages/AdminLog";
import AdminIncomingOrder from "./pages/AdminIncomingOrder";
import AdminMenu from "./pages/AdminMenu";
import { ProductProvider } from "../src/data/context";
>>>>>>> 22f1cc557b550564c289583b6a0d5b4d023f5eae

function App() {
  return (
    <div className="App">
<<<<<<< HEAD

      <Router>
        
          <Route path="/vendor" cmponent ={VendorPage} />
          <Route path="/vendorin" component={VendorIncomingOrder} />
          <Route path="/vendormenu" component ={VendorMenu} />
          <Router path="/vendorlocation" component={VendorCartLocation} />
          
      </Router>
      <Navigation />
      <Router>
        
=======
      <ProductProvider>
        <Navigation />
        <Router>
>>>>>>> 22f1cc557b550564c289583b6a0d5b4d023f5eae
          <Route exact path="/" component={Home} />
          <Route path="/cart-locations" component={CartLocations} />
          <Route path="/menu" component={MenuPage} />
          <Route path="/cart" component={Cart} />
          <Route path="/adminvendor" component={AdminVendor} />
          <Route path="/vendor" component={VendorPage} />
<<<<<<< HEAD
          <Route path="/registerPage" component={RegisterPage} />
          <Route path="/loginPage" component={LoginPage} />
        
      </Router>
      <Footer />
    </div> 
=======
          <Route path="/vendorLogout" component={VendorLogOut} />
          <Route path="/login" component={LoginPage} />
          <Route path="/vendor" cmponent={VendorPage} />
          <Route path="/vendorin" component={VendorIncomingOrder} />
          <Route path="/vendormenu" component={VendorMenu} />
          <Route path="/vendorlocation" component={VendorCartLocation} />
          <Route path="/adminaddcart" component={AdminAddCart} />
          <Route path="/adminlog" component={AdminLog} />
          <Route path="/adminincomingorder" component={AdminIncomingOrder} />
          <Route path="/adminmenu" component={AdminMenu} />
        </Router>
        <Footer />
      </ProductProvider>
    </div>
>>>>>>> 22f1cc557b550564c289583b6a0d5b4d023f5eae
  );
}

export default App;
