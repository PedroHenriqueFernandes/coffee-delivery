import styled from "styled-components";

export const ItemsFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 33px 24px 20px 24px;
    width: 100%;
    height: 38px;
    margin-bottom: 20px;
`;

export const ItemsCardPriceContainer = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: 4px;
`;

export const ItemsCardPriceSimbol = styled.span`
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: regular;
    line-height: 1.1375rem;
    color: ${props => props.theme['text']};
`;

export const ItemscardPriceValue = styled(ItemsCardPriceSimbol)`
    font-family: 'Baloo 2', cursive;
    font-size: 1.5rem;
    font-weight: 900;
    line-height: 31.2rem;
`;

export const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme['button']};
    border-radius: 6px;
     
    >input {
        width: 1.25rem;
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

export const ProductIconCount = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 8px; 
    cursor: pointer;

    svg{
        color: ${props => props.theme['purple-500']};
    }
`;

export const ProductCartButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme['purple-700']};
    border-radius: 6px;
    padding: 10.06px;
    border: 0;
    cursor: pointer;
    transition: background-color 0.2s;

    svg{
        color: ${props => props.theme['white']};
    }

    &:hover{
        background: ${props => props.theme['purple-500']};
    }
`;