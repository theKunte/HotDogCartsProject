import React, {Component}from 'react';
import { Container } from 'react-bootstrap';
import CartHeading from './CartHeading';
import {ProductConsumer} from '../../data/context';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotal from './CartTotal';

const styleContainer = {
	minHeight: 'calc(100vh - 48px - 40px)',
}

export default class Cart extends Component {
    render() {
        return (
					<Container style={styleContainer}>
						<ProductConsumer>
							{value => {
								const {cart} = value;
								if (cart.length > 0) {
									return (
										<div style={{marginTop: '100px'}}>
											<h2 style={{color: '#555'}}>Shopping Cart</h2>
											<CartHeading />
											<CartList value={value}/>
											<CartTotal value={value}/>
										</div>	
									)
								} else {
									return <EmptyCart />;
								}
							}} 
						</ProductConsumer>
					</Container>
        );
    }
}