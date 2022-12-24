import styled from "styled-components";

export const ItemsCartCheckoutContainer = styled.div`
    padding: 2.5rem 2.5rem 0rem 2.5rem;
    background-color: ${props => props.theme["card"]};

    img{
        width: 4rem;
    }

    
    hr{
        margin: 2.5rem 0;
        color: ${props => props.theme["button"]};
        border: 1px solid ${props => props.theme["button"]};
    }
`;

export const ItemCartCheckout = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;   
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const FunctionalitiesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    gap: 0.5rem;
    height: 4rem;
`;

export const ImageAndFunctionalitiesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    gap:1.125rem;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
`;