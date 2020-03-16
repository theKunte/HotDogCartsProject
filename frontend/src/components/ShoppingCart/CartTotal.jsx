import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import paymentTypes from './payments.png';
import securePayment from './secure-payment.png';

const CartTotal = ({value}) => {
  const {cartSubTotal, cartTax, cartTotal, clearCart} = value;
  return (
    <Container>
    <Row>
      <Col xs='12' sm='6' md='8' ld='8' xl='8'
        style={{
          borderTop: '1px solid #efefef',
          padding: '1rem 0'
        }}
      >
        <Link to='/menu'>
          <button 
            className='btn btn-outline-danger btn-sm mr-1' 
            type='buttone'
            onClick={() => clearCart()}
          >
              Clear Cart
            </button>
        </Link>
        <Link to='/menu'>
          <button 
            className='btn btn-outline-success btn-sm' 
            type='buttone'
          >
              Continue Shopping
            </button>
        </Link>
        <h5 style={{margin: '.5rem 0', color: '#777'}}>
          <span>
            Subtotal :        
          </span>
          <strong> $ {cartSubTotal}</strong>
        </h5>
        <h5 style={{color: '#777'}}>
          <span>
            Tax :        
          </span>
          <strong> $ {cartTax}</strong>
        </h5>
        <h5>
          <span>
            TOTAL :        
          </span>
          <strong> $ {cartTotal}</strong>
        </h5>
        <Link>
          <button 
            className='btn btn-success' 
            type='buttone'
          >
              PROCEED TO CHECKOUT
            </button>
        </Link>
      </Col>
      <Col xs='12' sm='3' md='2' ld='2' xl='2' style={{
          borderTop: '1px solid #efefef',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          paddingRight: '0',
          marginBottom: '1rem'
        }}>
        <img className="img-fluid" src={securePayment} alt="secure payment "/>
      </Col>
      <Col xs='12' sm='3' md='2' ld='2' xl='2'
        style={{
          borderTop: '1px solid #efefef',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          paddingRight: '0',
          marginBottom: '1rem'
        }}>
          <img className="img-fluid" src={paymentTypes} alt="payment type" />
      </Col>
    </Row>
    </Container>
  )
}

export default CartTotal;