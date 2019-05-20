import React, { Component } from 'react';
import Styled from 'styled-components';
// import '../../App.css';
class Button extends Component {
    render() {
        return (
            <React.Fragment>
                <ButtonContainer primary className="py-2 px-3 ml-2">
                    <span className="mr-2"><i className="fas fa-cart-plus"></i></span>    my cart
                </ButtonContainer>
            </React.Fragment>
        );
    }
}

export default Button;
