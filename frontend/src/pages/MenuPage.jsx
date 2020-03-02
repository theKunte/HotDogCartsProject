import React from 'react';
import { Container } from 'react-bootstrap';
import SelectedLocation from '../components/layouts/SelectedLocation';
import MenuItems from '../components/MenuItems';
import SideCart from '../components/layouts/SideCart';

const styleContainer = {
    minHeight: 'calc(98vh - 56px - 56px)',
    marginTop: '4.6875rem',
    position: 'relative'
}

const MenuPage = () => (
    <Container style={ styleContainer }>
        <div className='d-flex align-items-center'>
            <a className='btn btn-warning btn-sm' style={{ width: '180px'}} href="/cart-locations">Back To Map</a>  
        </div>
        <SelectedLocation /> 
        <h4 className='text-center' style={{ margin: '2rem 0'}}>LIST OF HOTDOGS</h4>
        <div className='d-flex flex-between flex-wrap' style={{ width: '80%', marginBottom: '1rem'}}>
            <MenuItems />
            <MenuItems />
            <MenuItems />
            <MenuItems />
            <MenuItems />
            <MenuItems />
            <MenuItems />
    
            <SideCart />
        </div>
    </Container>
)

export default MenuPage;