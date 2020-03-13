import React, { Component } from 'react';
import { hotdogProducts } from './data';

const ProductContext = React.createContext();
// Provider
// Consumer

class ProductProvider extends Component {

    state = {
        products: [],
        cart: [],
        modalOpen: true,

    }

    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let tempProducts = [];
        hotdogProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        })
        this.setState(() => {
            return {products: tempProducts}
        })
    }

    // get item id
    getItem = id => {
        const product = this.state.products.find(item => item.id === id);
        return product
    };

    // add to cart method
    addToCart = id => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() => {
            return {products: tempProducts, cart: [...this.state.cart, product]};
        },
        () => {
            console.log(this.state);
        });
    }

    render() {
        return (
            <ProductContext.Provider 
            value={{
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