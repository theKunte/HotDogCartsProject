import React, { Component } from 'react'

const padding = {
    paddingTop: '8rem',
    textAlign: 'center'
}

const styleContainer = {
	height: 'calc(100vh - 48px - 40px)',
}

export default class EmptyCart extends Component {
    render() {
        return (
            <div style={styleContainer}>
            <h2 style={padding}>Your cart is currently empty.</h2>
            </div>
        )
    }
}