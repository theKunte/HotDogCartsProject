import React from 'react';
import {Component} from 'react';

class VendorSideNav extends Component{
    constructor(props) {
        super(props);
        this.state = {
          id: this.props.id,
          highlight: this.props.highlight
        };

        this.navIncoming = this.state.highlight == 'incoming';
        this.navVendorMenu = this.state.highlight == 'incoming';
        this.navVendorLocation = this.state.highlight == 'incoming';
    }
    render() {
        return (
            <div>
                <div className = "dashboardSideNav">
                    <p><i className ="fas fa-vendor"></i>Hello Vendor!</p>
                    <hr/>
                    <ul> 
                        <li className={this.navIncoming ? `'active'` : ``}>
                            <a href={`/vendorincoming/${this.state.id}?`}>Incoming Order</a>
                        </li>
                        <li className={this.navVendorMenu ? `'active'` : ``}>
                            <a href={`/vendormenu/${this.state.id}`}>Menu Item</a>
                        </li>
                        <li className={this.navVendorLocation ? `'active'` : ``}>
                            <a href={`/vendorlocation/${this.state.id}`}>Cart Location</a>
                        </li>
                    </ul>
                    <hr/>
                    <a className= 'logout' href="/login">Logout</a>
                </div>
            </div>
        )

    }
}

export default VendorSideNav;