import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {ProductsConsumer} from '../Context';

class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <Title name="Masud's" title="Product"/>
                    <div className="row">
                        <ProductsConsumer>
                            {value=> {
                                return value.products.map(product =>{
                                    return <Product key={product.id} product={product}/>
                                })
                            }}
                        </ProductsConsumer>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ProductList;