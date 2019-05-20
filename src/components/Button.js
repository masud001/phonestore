import Styled from 'styled-components';



// my-cart button style
export const ButtonContainer = Styled.button`
    background: ${props => props.primary ? "var(--mainyellow)" : "var(--maindark)"};
    text-transform:capitalize;
    font-family: 'Righteous', cursive !important;
    border:2px solid var(--maindark);
    color:${props => props.primary ? "var(--mainwhite)" : "var(--mainyellow)"};
    cursor:pointer;
    transition: all 0.3s ease-in-out; 
    &:hover{
        color:${props => props.primary ? "var(--mainyellow)" : "var(--mainwhite)"};
        background: ${props => props.primary ? "var(--maindark)" : "var(--mainyellow)"};
        border:2px solid var(--mainyellow);
    }
    &:focus{
        outline:none;
    }
    

`;