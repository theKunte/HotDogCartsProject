import React from 'react';
import {Component} from 'react';

class VendorSideNav extends Component{
    render() {
        return (
            <div>
                <div className = "dashboardSideNav">
                    <p><i className ="fas fa-vendor"></i>Hello Vendor!</p>
                    <hr/>
                    <ul> 
                        <li className ='active'><a href="/vendorincoming">Incoming Order</a></li>
                        <li><a href="/vendormenu">Menu Item</a></li>
                        <li><a href="/vendorlocation">Cart Location</a></li>
                    </ul>
                    <hr/>
                    <a className= 'logout' href="/vendorlogout">Logout</a>
                </div>
            </div>
        )

    }
}

export default VendorSideNav;