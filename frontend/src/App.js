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
import Cart from './pages/Cart';
import AdminVendor from "./pages/AdminVendor";
import LoginPage from "./pages/LoginPage";
import AdminAddCart from "./pages/AdminAddCart";
import AdminLog from "./pages/AdminLog";
import AdminRemoveCart from "./pages/AdminRemoveCart";
import AdminIncomingOrder from "./pages/AdminIncomingOrder";
import AdminMenu from "./pages/AdminMenu";
import { ProductProvider } from '../src/data/context';

function App() {
  return (
    <div className="App">
      <ProductProvider>
        <Navigation />
          <Router>
            <Route exact path="/" component={Home} />
            <Route path="/cart-locations" component={CartLocations} />
            <Route path="/menu" component={MenuPage} />
            <Route path="/cart" component={Cart} />
            <Route path="/adminvendor" component={AdminVendor} />
            <Route path="/vendor" component={VendorPage} />
            <Route path="/vendorLogout" component={VendorLogOut} />
            <Route path="/login" component={LoginPage} />
            <Route path="/vendor" cmponent={VendorPage} />
            <Route path="/vendorincoming" component={VendorIncomingOrder} />
            <Route path="/vendormenu" component={VendorMenu} />
            <Route path="/vendorlocation" component={VendorCartLocation} />
            <Route path="/adminaddcart" component={AdminAddCart} />
            <Route path="/adminlog" component={AdminLog} />
            <Route path="/adminremovecart" component={AdminRemoveCart} />
            <Route path="/adminincomingorder" component={AdminIncomingOrder} />
            <Route path="/adminmenu" component={AdminMenu} />
          </Router>
        <Footer />
      </ProductProvider>
    </div>
  );
}

export default App;
