import styled from "styled-components";

export const ItemCartCheckoutContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;   
    flex-wrap: wrap;
    gap: 0.5rem;

    @media screen and (max-width: 1260px){
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    @media screen and (max-width: 1260px){
        img{
            width: 3rem;
            gap: 0.5rem;
        }
    }
`;

export const FunctionalitiesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    gap: 0.5rem;
    height: 4rem;

    @media screen and (max-width: 1260px){
        flex-direction: column;
        align-items: center;
    }
`;

export const ImageAndFunctionalitiesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    gap:1.125rem;

    @media screen and (max-width: 1260px){
        height: 100%;
        gap: 0.5rem;
        flex-direction: column;
        align-items: center;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
`;