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
              <a href="/adminvendor">Vendor List</a>
            </li>
            <li>
              <a href="/adminaddcart">Add Cart</a>
            </li>
            <li>
              <a href="/adminremovecart">Remove Cart</a>
            </li>
            <li>
              <a href="/adminincomingorder">Incoming Orders</a>
            </li>
            <li>
              <a href="/adminmenu">Menu Item</a>
            </li>
            <li>
              <a href="/adminlog">Log</a>
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
