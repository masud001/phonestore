import React, { Component } from 'react';
import {Link}  from 'react-router-dom';
import styled from 'styled-components';
import {ProductsConsumer} from '../Context';
import PropTypes from 'prop-types';

class Product extends Component {
    render() {
        const {id, title, img, price, company, info, inCart} = this.props.product;
        return (
            <ProductWrapper className="col-12 mx-auto col-md-6 col-lg-3 my-3">
            <div className="card">
                <ProductsConsumer>
                    {value =>(
                        <div 
                            className="image-container p-5" 
                            onClick={() => value.handelDetail(id)}
                            >
                            <Link to='/details'>
                                <img src={img} alt="images title" className="card-img-top"/>
                            </Link>
                            <button 
                                className="cart-btn" 
                                disabled={inCart?true:false}
                                onClick={()=> value.addToCart(id)}>
                                {inCart ? 
                                    (<p className="text-capitalize mb-0" disabled>{" "} in cart</p>)
                                    :
                                    (<i className="fas fa-cart-plus"></i>)
                            }
                            </button>
                        </div>
                    )}
                </ProductsConsumer>
                <div className="card-footer d-flex justify-content-between">
                    <p className="align-self-center mb-0">{title}</p>
                    <h5 className="font-italic mb-0"> <span>$</span> {price}</h5>
                </div>
            </div>
            </ProductWrapper>
        );
    }
}

export default Product;

// to validate all data type, we need to varify the value of all datatype
// ------------------------------------------------------------------------
Product.propTypes = {
    product:PropTypes.shape({
        id:PropTypes.number,
        title:PropTypes.string,
        img:PropTypes.string,
        price:PropTypes.number, 
        company:PropTypes.string, 
        info:PropTypes.string, 
        inCart:PropTypes.bool
    }).isRequired
}


const ProductWrapper = styled.div`

.card{
    border:1px solid transparent;
    transition: .5s all ease-in;
}
.card-footer{
    background: transparent;
    border-top: 1px solid transparent;
    transition: all .5s ease-in;
}
&:hover{
    .card{
        border: 1px solid rgba(0,0,0,.125);
        transition: .5s all ease-in;
    }
    .card-footer{
        background-color: rgba(0,0,0,.03);
        border-top: 1px solid rgba(0,0,0,.125);
        transition: all .5s ease-in;
    }
}

.image-container{
    position:relative;
    overflow:hidden;
}
.card-img-top{
    transition: all .5s ease-in-out;
}
.image-container:hover .card-img-top{
    transform:scale(1.2);
}

.cart-btn{
    position:absolute;
    bottom:0;
    right:0;
    border:2px solid var(--maindark);
    transition: all .5s ease-in-out;
    color:var(--mainwhite);
    padding: 5px;
    font-size:1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform:translate(100%, 100%);
    background-color:var(--mainyellow);
    cursor:pointer;
    font-family: 'Righteous', cursive !important;
}
.cart-btn:hover{
    color:var(--mainyellow);
    border:2px solid var(--mainyellow);
    background-color:var(--maindark);
}
.image-container:hover .cart-btn{
    transform:translate(0, 0);
}





`