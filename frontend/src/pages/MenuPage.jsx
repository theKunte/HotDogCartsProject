import React, {Component} from 'react';
import '../App.css';
import { Container } from 'react-bootstrap';
import SelectedLocation from '../components/layouts/SelectedLocation';
import MenuItem from '../components/MenuItem';
import { ProductConsumer } from '../data/context';
import Modal from '../components/Modal';

const styleContainer = {
    minHeight: 'calc(98vh - 56px - 56px)',
    marginTop: '4.6875rem',
    position: 'relative',
}

const styleTitle = {
	fontFamily: 'Luckiest Guy',
    letterSpacing: '.5px',
    margin: '2rem 0',
    textAlign: 'center',
    fontSize: '3rem',
		marginTop: '2rem',
		color: '#0257a7'
}

export default class MenuPage extends Component {
	render() {
		return (
		<React.Fragment>
				<div className="menu-bg"></div>
					<Container style={ styleContainer }>
						<div className='d-flex align-items-center'>
								<a className='btn btn-warning btn-sm' style={{ width: '180px'}} href="/cart-locations">Back To Map</a>  
						</div>
						<SelectedLocation /> 
						<h4 style={styleTitle}>OUR MENU</h4>
							<div className='d-flex flex-between flex-wrap' style={{ paddingLeft: '1rem', marginBottom: '2rem'}}>
									
									<ProductConsumer>
											{(value) => {
													return value.products.map( product => {
															return <MenuItem 
																	key={product.id} 
																	product = {product} 
																	/>
													});
											}}
									</ProductConsumer>

							</div>
						<Modal />
				</Container>
			</React.Fragment>
			)
	}
}
