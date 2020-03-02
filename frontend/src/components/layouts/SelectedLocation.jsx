import React from 'react';

const styleSidebar = {
    width: '100%',
    backgroungColor: '#333',
    paddingTop: '1rem'
}

function SelectedLocation () {
    return (
        <div>
            <div style={ styleSidebar }>
                <div style ={{ fontSize: '14px', lineHeight: '0' }} className='flex-wrap d-flex pt-3'>
                    <p style={{ fontWeight: 'bold', paddingRight: '1rem' }}>Current Location:</p>
                    <p style={{ paddingRight: '1rem' }}>Name: Hot Dog Cart #1</p>
                    <p style={{ paddingRight: '1rem' }}>Address: 123 3rd Ave Seatt WA 98122</p>
                    <p style={{ paddingRight: '1rem' }}>Hours: 10am - 11pm</p>
                    <p style={{ paddingRight: '1rem' }}>Phone: 206-234-5678</p>
                </div>
                <hr/>
            </div>
        </div>
    )
}

export default SelectedLocation;