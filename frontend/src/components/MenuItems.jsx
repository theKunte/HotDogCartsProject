import React, { useState } from 'react';
import '../App.css';
import { Row, Col } from 'react-bootstrap';

const MenuItems = () => {
    return (
        <div >
            <Row>
                <Col>
                    <div className="contentBox">
                        <img className="productImg" src="https://regmedia.co.uk/2017/07/07/hotdog.jpg?x=442&y=293&crop=1" alt="" />
                        <div className="titleBox">
                            <h6 className="productTitle">Classic Beef</h6>
                            <p className="productDesc">Taste how 100% Beef turns a great hot dog into a grill-worthy masterpiece.</p>
                        </div>
                        <hr></hr>
                        <div className="priceBox">
                            <p className="price">$3.99</p>
                            <a className="addToCart btn btn-warning btn-sm" href="#">Add to cart</a>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default MenuItems;