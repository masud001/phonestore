import React, { Component } from 'react';
import {ProductsConsumer} from '../Context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

class Details extends Component {
    render() {
        return (
            <ProductsConsumer>
                {(value)=>{
                    const {id,company,img,info,price,title,inCart} = value.detailsProducts;
                    return(
                        <div className="container">
                            <div className="row">
                                <div className="col-10 mx-auto text-center my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt={title}/>
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>model : {title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        made by : <span className="text-uppercase">
                                        {company}
                                        </span>
                                    </h4>
                                    <h4 className="">
                                        <strong>
                                            Price : <span>$ </span>{price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-4">
                                        some info about product
                                    </p>
                                    <p className="text-muted lead mb-5">{info}</p>
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer primary className="py-2 px-3 ml-2 my-2">
                                                back to product
                                            </ButtonContainer>
                                            <ButtonContainer 
                                                primary
                                                disabled={inCart?true:false}
                                                onClick={()=> {
                                                    value.addToCart(id);
                                                }}
                                                className="py-2 px-3 ml-2 my-2">
                                                {inCart ? "InCart": "add to cart"}
                                            </ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductsConsumer>
        );
    }
}

export default Details;