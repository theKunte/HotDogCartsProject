import React, { Component } from 'react';
import { ProductConsumer } from '../data/context';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

export default class Modal extends Component {
	render() {
		return (
			<ProductConsumer>
				{(value) => {
					const {modalOpen, closeModal} = value;
					const {img, title, price } = value.modalProduct;
					
					if (!modalOpen) {
						return null;
					}
					else {
						return (
							<div style={styleModalContainer}>
								<Container >
									<Row>
										<Col>
											<div style={styleModal} className='col-8 mx-auto col-md-6 col-lg-4'>
												<h5>Item Added to the Cart</h5>
												<img src={img} className='img-fluid' alt='product' />
												<h5>{title}</h5>
												<h5>Price: $ {price}</h5>
											
												<Link to="/menu" className='btn btn-warning btn-sm' 
												onClick={() => closeModal()}>
													Continue Shopping
												</Link>
												<br></br>
												<Link to="/cart" className='btn btn-success btn-sm' 
												onClick={() => closeModal()}>
													Go to Cart
												</Link>

											</div>
										</Col>
									</Row>
								</Container>
							</div>
						)
					}
				}}
			</ProductConsumer>
		);
	}
}


const styleModalContainer = {
	position: 'fixed',
	top: '0',
	bottom: '0',
	left: '0',
	right: '0',
	background: 'rgba(0,0,0,0.5)',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}

const styleModal = {
	textAlign: 'center',
	backgroundColor: '#eee',
	padding: '2rem',
	borderRadius: '.1rem'
}