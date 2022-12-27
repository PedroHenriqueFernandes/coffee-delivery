import styled from "styled-components";

export const ProductIconCount = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 8px; 
    cursor: pointer;
    transition: color 0.2s;

    svg{
        color: ${props => props.theme['purple-700']};
    }

    &:hover svg{
        color: ${props => props.theme['purple-500']};
    };
`;

export const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme['button']};
    border-radius: 6px;
     
    >input {
        width: 1.7rem;
        height: 1.25rem;
        padding: 8.5px 4px;
        border: 0;
        background: ${props => props.theme['button']};
        text-align: center;
     }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance: textfield;
    }
`;

export const ProductIconCountScreenCheckout = styled(ProductIconCount)`
    padding: 9px 8px; 
`