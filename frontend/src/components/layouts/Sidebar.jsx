import React from 'react';
import FavoriteCarts from '../../data/favorite-carts';

const styleSidebar = {
    width: '235px',
    backgroungColor: '#333',
    border: '1px solid #ffc107',
    padding: '1rem',
    float: 'left',
    marginRight: '1rem',
    marginBottom: '1rem',
    // borderRadius: '.3rem'
}

function Sidebar () {
    return (
        <div style={ styleSidebar }>
            <h4 style ={{color: '#0257a7' }}>Favorites:</h4>
            <hr/>
            { FavoriteCarts.map(carts => 
                <div style ={{ fontSize: '14px', color: '#0257a7' }}>
                    <p style={{ marginBottom: '.5rem' }}>{ carts.title }</p>
                    <p style={{ marginBottom: '.5rem' }}>{ carts.address }</p>
                    <a className="btn btn-sm btn-warning" href="/menu">View Menu</a>
                    <hr/>
                </div>
            )}
        </div>
    )
}

export default Sidebar;
