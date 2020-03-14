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
					<ProductConsumer>
						{(value) => (
							<div className="contentBox">
								<img className="productImg" src={this.props.product.img} alt={title} />
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
												onClick = {()=> { 
													value.addToCart(id)
													value.openModal(id);
												}} 
										>
												{inCart ? (<i className="fas fa-shopping-cart"></i>) : (<p>Add to Cart</p>)}
										</a>
								</div>
							</div>
						)}
					</ProductConsumer>
				</Col>
			</Row>
    )
  }
}