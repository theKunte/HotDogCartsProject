import React, { Component } from 'react';
import { hotdogProducts, detailProduct } from './data';

const ProductContext = React.createContext();
// Provider
// Consumer

class ProductProvider extends Component {

    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    };

    componentDidMount() {
        this.setProducts();
    };

    setProducts = () => {
        let tempProducts = [];
        hotdogProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        })
        this.setState(() => {
            return {products: tempProducts}
        })
    };

    // get item id
    getItem = id => {
        const product = this.state.products.find(item => item.id === id);
        return product
    };

    // handle details
    handleDetail = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return { detailProduct: product };
        });
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
            this.addTotal();
        });
    };

    // open modal
    openModal = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return {modalProduct: product, modalOpen: true}
        });
    };

    // close modal
    closeModal = () => {
        this.setState(() => {
            return {modalOpen: false}
        });
    };

    // increment method
    increment = id => {
			let tempCart = [...this.state.cart];
			const selectedProduct = tempCart.find(item => item.id === id);
			const index = tempCart.indexOf(selectedProduct);
			const product = tempCart[index];
			product.count = product.count + 1;
			product.total = product.count * product.price;
			this.setState(() => {
				return {
					cart: [...tempCart]
				}
			},
			() => {
				this.addTotal();
			})
    }
    
    // decrement method
    decrement = id => {
      let tempCart = [...this.state.cart];
			const selectedProduct = tempCart.find(item => item.id === id);
			const index = tempCart.indexOf(selectedProduct);
			const product = tempCart[index];
			product.count = product.count - 1;
			
			if (product.count === 0) {
				this.removeItem(id);
			} else {
				product.total = product.count * product.price;
				this.setState(() => {
					return {
						cart: [...tempCart]
					}
				},
				() => {
					this.addTotal();
				})
			}
    }

    // removeItem method
    removeItem = id => {
			let tempProducts = [...this.state.products];
			let tempCart = [...this.state.cart];
			tempCart = tempCart.filter(item => item.id !== id);
			const index = tempProducts.indexOf(this.getItem(id));
			let removedProduct = tempProducts[index];
			removedProduct.inCart = false;
			removedProduct.count = 0;
			removedProduct.total = 0;
			this.setState(() => {
				return {
					cart: [...tempCart],
					products: [...tempProducts]
				};
			}, 
			() => {
				this.addTotal();
			})
    }

    // clearCart method
    clearCart = (id) => {
      this.setState(() => {
				return {cart: []}
			}, () =>  {
				this.setProducts();
				this.addTotal();
			})
    }

    // addTotal method
    addTotal = () => {
				let subTotal = 0;
				this.state.cart.map(item => (subTotal += item.total));
				const tempTax = subTotal * 0.1;
				const tax = tempTax;
				const total = subTotal + tax;
				this.setState(()=>{
					return {
						cartSubTotal: parseFloat(subTotal.toFixed(2)),
						cartTax: parseFloat(tax.toFixed(2)),
						cartTotal: parseFloat(total.toFixed(2))
					}
				})
    }

    render() {
        return (
            <ProductContext.Provider 
            value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };