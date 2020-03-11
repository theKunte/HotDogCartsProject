import React, {Component} from 'react';
import { Row, Col } from 'react-bootstrap';
import { ProductConsumer } from '../data/context';
import {Link} from 'react-router-dom';

export default class MenuItem extends Component {
    render() {

        const {id, title, img, price, info, inCart} = this.props.product;

        return (
            <Row>
                <Col>
                    <div className="contentBox">
                        <img className="productImg" src="https://regmedia.co.uk/2017/07/07/hotdog.jpg?x=442&y=293&crop=1" alt="" />
                        <div className="titleBox">
                            <h6 className="productTitle">{this.props.product.title}</h6>
                            <p className="productInfo">{this.props.product.info}</p>
                        </div>
                        <hr></hr>
                        <div className="priceBox">
                            <p className="price">${this.props.product.price}</p>
                            <a 
                                className="addToCart btn btn-warning btn-sm" 
                                href="#" 
                                disabled={inCart ? true : false} 
                                onClick={()=> {console.log('Added to the card.')}} 
                            >
                                {inCart ? (<p disabled>In the Cart</p>) : (<p>Add to Cart</p>)}
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}
