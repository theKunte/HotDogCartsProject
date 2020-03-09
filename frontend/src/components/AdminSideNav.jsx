import React from "react";
import { Component } from "react";

class AdminSideNav extends Component {
  render() {
    return (
      <div>
        <div className="dashboardSideNav">
          <p>
            <i className="fas fa-user"></i> Hello, Admin
          </p>
          <hr />
          <ul>
            <li className="active">
              <a href="/vendor-list">Vendor List</a>
            </li>
            <li>
              <a href="/adminaddcart">Add A Cart</a>
            </li>
            <li>
              <a href="/remove-cart">Remove Cart</a>
            </li>
            <li>
              <a href="/incoming-orders">Incoming Order</a>
            </li>
            <li>
              <a href="/menu-item">Menu Item</a>
            </li>
            <li>
              <a href="/log">Log</a>
            </li>
          </ul>
          <hr />
          <a className="logout" href="/login">
            Logout
          </a>
        </div>
      </div>
    );
  }
}

export default AdminSideNav;
