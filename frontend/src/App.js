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
// import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import Signup from './pages/RegisterPage';
import VendorLogOut from './pages/VendorLogOut';



import Cart from "./components/ShoppingCart/Cart";
import AdminVendor from "./pages/AdminVendor";
import AdminAddCart from "./pages/AdminAddCart";
import AdminLog from "./pages/AdminLog";
import AdminIncomingOrder from "./pages/AdminIncomingOrder";
import AdminMenu from "./pages/AdminMenu";
import { ProductProvider } from "../src/data/context";

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
          <Route path="/vendorLogout" component={VendorLogOut} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={Signup} />
          <Route path="/adminaddcart" component={AdminAddCart} />
          <Route path="/adminlog" component={AdminLog} />
          <Route path="/adminincomingorder" component={AdminIncomingOrder} />
          <Route path="/adminmenu" component={AdminMenu} />
          
          {/* ---> go to specific vendor's page by passing in an id */}
          {/* <Route exact path="/vendor/:id" render={(props) => <VendorPage globalStore={globalStore} {...props} /> } /> */}
          <Route path="/vendor/:id" component={VendorPage}/>
          <Route path="/vendorLocation/:id" component={VendorCartLocation}/>
          <Route path="/vendorIncoming/:id" component={VendorIncomingOrder}/>
        </Router>
        <Footer />
      </ProductProvider>
    </div>
  );
}

export default App;
