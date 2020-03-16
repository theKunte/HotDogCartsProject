import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class CartHeading extends Component {
    render() {
        return (
            <Container className='d-md-block text-uppercase'>
							<Row style={{borderBottom: '1px solid #efefef'}}>
								<Col>
									<p>Products</p>
								</Col>
								<Col>
									<p>Name</p>
								</Col>
								<Col>
									<p>Price</p>
								</Col>
								<Col className='text-center'>
									<p>Quantity</p>
								</Col>
								<Col className='text-center'>
									<p>Remove</p>
								</Col>
								<Col>
									<p>Total</p>
								</Col>
							</Row>
						</Container>
        )
    }
}
