import React, {Component} from 'react';
import { Container } from 'react-bootstrap';
import SelectedLocation from '../components/layouts/SelectedLocation';
import MenuItem from '../components/MenuItem';
import { ProductConsumer } from '../data/context';

const styleContainer = {
    minHeight: 'calc(98vh - 56px - 56px)',
    marginTop: '4.6875rem',
    position: 'relative'
}

export default class MenuPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Container style={ styleContainer }>
                    <div className='d-flex align-items-center'>
                        <a className='btn btn-warning btn-sm' style={{ width: '180px'}} href="/cart-locations">Back To Map</a>  
                    </div>
                    <SelectedLocation /> 
                    <h4 className='text-center' style={{ margin: '2rem 0'}}>BOB'S DOGS MENU</h4>
                    <div className='d-flex flex-between flex-wrap' style={{ paddingLeft: '1rem', marginBottom: '2rem'}}>
                        {/* <MenuItem />
                        <MenuItem />
                        <MenuItem />
                        <MenuItem /> */}
                        
                        <ProductConsumer>
                            {(value) => {
                                return value.products.map( product => {
                                    return <MenuItem 
                                        key={product.id} 
                                        product = {product} />
                                });
                            }}
                        </ProductConsumer>

                    </div>
                </Container>
            </React.Fragment>
        )
    }
}
