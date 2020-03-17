import VendorRenderBox from './VendorRenderBox';
import VendorSideNav from '../components/VendorSideNav';
import { Container, Row, Col } from 'react-bootstrap';

import React, {Component} from 'react';
import '../App.css';
import SelectedLocation from '../components/layouts/SelectedLocation';
import VendorMenuItem from '../components/VendorMenuItem';
import { ProductConsumer } from '../data/context';
import Modal from '../components/Modal';

const styleContainer = {
    minHeight: 'calc(98vh - 56px - 56px)',
    marginTop: '4.6875rem',
    position: 'relative'
}
class VendorMenu extends Component {
    constructor(){
        super();
        this.state ={
            vendors:[]
        };
    }

    componentDidMount(){
        fetch("http://localhost:3000/vendor/vendors/")
        .then(res =>res.json())
        .then(vendors => this.setState({vendors}));
    }
    render() {
        return (
				<Container fluid style={ styleContainer }>
						<Row>
							<Col xs='2' sm='2' md='2' lg='2' ls='2'>
								<VendorSideNav/>
							</Col>

						<Col xs='10' sm='10' md='10' lg='10' ls='10'>	
						<h4 className='text-center' style={{ margin: '2rem 0'}}>Check Out Your Inventory!</h4>
						<div className='d-flex flex-between flex-wrap' style={{ paddingLeft: '1rem', marginBottom: '2rem'}}>
								<ProductConsumer>
										{(value) => {
												return value.products.map( product => {
													return <VendorMenuItem 
															key={product.id} 
															product = {product} />
												});
										}}
								</ProductConsumer>
						</div>
					</Col>
				</Row>
			</Container>
  	)
  } 
}
export default VendorMenu;