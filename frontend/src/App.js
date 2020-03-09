import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import VendorPage from "./pages/VendorPage";
import VendorMenu from "./pages/VendorMenu";
import VendorIncomingOrder from "./pages/VendorIncomingOrder";
import VendorCartLocation from "./pages/VendorCartLocation";
import Navigation from "./components/layouts/Navigation";
import Footer from "./components/layouts/Footer";
import Home from "./pages/Home";
import CartLocations from "./pages/CartLocations";
import MenuPage from "./pages/MenuPage";
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";
import AdminAddCart from "./pages/AdminAddCart";
import AdminLog from "./pages/AdminLog";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/vendor" cmponent={VendorPage} />
        <Route path="/vendorin" component={VendorIncomingOrder} />
        <Route path="/vendormenu" component={VendorMenu} />
        <Router path="/vendorlocation" component={VendorCartLocation} />
        <Router path="/adminaddcart" component={AdminAddCart} />
        <Router path="/adminlog" component={AdminLog} />
      </Router>
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
