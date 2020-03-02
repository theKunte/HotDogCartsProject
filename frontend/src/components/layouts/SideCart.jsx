import React from 'react';

const styleSideCart = {
    border: '1px solid black',
    padding: '1rem',
    borderRadius: '.3rem',
    marginLeft: '1rem',
    marginTop: '0.5rem',
    position: 'absolute',
    right: '0',
    width: '250px',
    backgroundColor: '#fffef2'
}

const SideCart = () => (
    <div style={ styleSideCart }>   
        <h4>Shopping Cart <i className="fas fa-shopping-cart"></i></h4>
        <hr></hr>
        <p>Item One</p>
        <p>Item Two</p>
        <p>Item Three</p>
        <hr></hr>
        <h6>Subtotal: <span className='cartSubtotal'>$12.99</span></h6>
        <h6>Delivery: <span className='cartDelivery'>Free</span></h6>
        <hr></hr>
        <h4>Total: <span className='cartTotal'>$12.99</span></h4>
        <hr></hr>
        <a href='/manu' className='btn btn-success' style={{ width: '100%' }}>CHECKOUT</a>
    </div>
)

export default SideCart;