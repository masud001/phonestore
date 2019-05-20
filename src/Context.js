import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';


const ProductsContext = React.createContext();


class ProductsProvider extends Component {
    state = {
        products: [],
        detailsProducts:detailProduct,
        cart:[]
    };

    componentDidMount(){
        this.setProducts();
    }
    
    setProducts = () => {
        let temProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            temProducts = [...temProducts, singleItem];
        });
        this.setState(() => {
            return {products: temProducts};
        });
    }


    // get individual products based on id of this particular products
    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handelDetail = (id) =>{
        const product = this.getItem(id);
        this.setState(()=>{
            return {detailsProducts:product}
        })
    }
    addToCart = (id) =>{
        let temProducts = [...this.state.products];
        const index = temProducts.indexOf(this.getItem(id));
        const product = temProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() =>{
            return {products:temProducts, cart:[...this.state.cart,product]}
        },() => {console.log(this.state)});
    }
    render() {
        return (
            <ProductsContext.Provider value={{
                ...this.state,
                handelDetail:this.handelDetail,
                addToCart:this.addToCart
            }}>
                {this.props.children}
            </ProductsContext.Provider>
        );
    }
}


// product consumer

const ProductsConsumer = ProductsContext.Consumer;

export  {ProductsProvider, ProductsConsumer};

