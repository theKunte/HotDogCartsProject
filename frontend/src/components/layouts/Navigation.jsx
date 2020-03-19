import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function Navigation() {
    return (
        <Navbar className="navBg" collapseOnSelect expand="sm" variant="dark" fixed="top">
        <Navbar.Brand href="/">Bob's Dogs</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/register">Sign Up</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/cart"><i className="fas fa-shopping-cart"></i></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;