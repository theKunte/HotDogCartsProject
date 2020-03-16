import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function Navigation() {
    return (
        <Navbar collapseOnSelect 
            expand="sm" 
            variant="dark" 
            fixed="top" 
            style={{backgroundColor: '#f4aa1b'}}>

        <Navbar.Brand href="/" style={{fontFamily: 'Luckiest Guy', color: '#0257a7'}}>
            BOB'S DOGS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/" style={{color: '#0257a7'}}>Home</Nav.Link>
                    <Nav.Link href="/login" style={{color: '#0257a7'}}>Login</Nav.Link>
                    <Nav.Link href="/cart" style={{color: '#0257a7'}}><i className="fas fa-shopping-cart"></i></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;