import React, { Component } from 'react';
import { hotdogProducts } from './data';

const ProductContext = React.createContext();
// Provider
// Consumer

class ProductProvider extends Component {

    state = {
        products: hotdogProducts
    }

    // add to cart method
    addToCart = () => {
        console.log("Add to cart!");
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };