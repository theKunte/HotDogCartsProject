import React from 'react';
import { Row, Col } from 'react-bootstrap';

const CartItem = ({item, value}) => {
  const {id, title, img, price, total, count} = item;
  const {increment, decrement, removeItem} = value;
  return (
    <Row className="my-3 align-items-center">
      <Col>
        <img 
          src={img} 
          alt={title} 
          className="img-fluid"
          style={{ width: '5rem'}}  
        />
      </Col>
      <Col>
        <span className="d-md-none d-sm-none">item : </span>
        {title}
      </Col>
      <Col sm='1' md='1'>
        <span className="d-md-none d-sm-none">price : </span>
        {price}
      </Col>
      <Col sm='3' md='3'>
        <div className="d-flex justify-content-end">
          <div style={{border: '1px solid #efefef'}}>
            <span className="btn btn-black mx-1" 
              onClick={() => decrement(id)}> 
              - 
            </span>

            <span className="btn btn-black mx-1">{count}</span>

            <span className="btn btn-black mx-1" 
            onClick={() => increment(id)}> 
              + 
            </span>
          </div>
        </div>
      </Col>
      <Col className='text-center'>
        <div onClick={() => removeItem(id)}>
          <i className="fas fa-trash"></i>
        </div>
      </Col>
      <Col>
        <span>
          <strong>Total : $ {parseFloat(total.toFixed(2))}</strong>
        </span>
      </Col>
    </Row>
  )
}

export default CartItem;