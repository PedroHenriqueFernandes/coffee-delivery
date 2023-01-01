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

    @media screen and (max-width: 1260px){
        padding: 1rem 1rem 0rem 1rem;
        hr{
            margin: 1rem 0;
        }
    }
`;

