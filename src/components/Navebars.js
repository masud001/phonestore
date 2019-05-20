import React, { Component } from 'react';
import logo from '../logo.svg';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
import Styled from 'styled-components';

class Navebars extends Component {
    render() {
        return (
            
            <NavWrapper className="navbar navbar-expand-sm navbar-light sticky-top">
                <div className="container-fluid">
                    <Link to='/'>
                        <img src={logo} className="navbar-brand img-fluid" alt="Logo Images"/>
                    </Link>
                    
                    <ul className="navbar-nav mr-auto ml-5">
                        <li className="nav-item active">
                            <Link to='/' className="nav-link">Product</Link>
                        </li>
                    </ul>
                    
                    <Link to='/carts'>
                        <ButtonContainer primary className="py-2 px-3 ml-2">
                            <span className="mr-2"><i className="fas fa-cart-plus"></i></span>    my cart
                        </ButtonContainer>
                    </Link>
                    
                </div>
            </NavWrapper>
            
            
        );
    }
}

export default Navebars;

// navbar design

const NavWrapper = Styled.nav `
    background-color:var(--mainblue);
.nav-link{
    color:var(--mainwhite)!important;
    font-size:1.2rem;
    text-transform:capitalize !important;
    font-weight:200;
    font-family:'Righteous', cursive !important;
    transition:all 0.3s ease-in-out;
    &:hover{
        color:var(--mainyellow) !important;
    }
    &:focus {
        outline:none;
    }
}

`;