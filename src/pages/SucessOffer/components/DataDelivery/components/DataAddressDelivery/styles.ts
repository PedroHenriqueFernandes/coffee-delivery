import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 16.875rem;
    width: 32.875rem;
    background: linear-gradient(#fff, #fff) padding-box,
    linear-gradient(#dbac2c, #8047f8) border-box;
    border: 1px solid transparent;
    border-radius: 6px 36px;

    @media screen and (max-width: 1260px){
        width: 100%;
        height: 100%;
        margin-bottom: 1rem;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 100%;
    padding: 2.5rem;

    @media screen and (max-width: 1260px){
        padding: 1.5rem;
        gap: 2rem;
    }
`;

export const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    height: 2rem;
    padding: 0.5rem;

    @media screen and (max-width: 1260px){
        gap: 0.5rem;
    }
`;

export const InfoIcon = styled.div<{TypeInfo: string}>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 50%;
    
    background-color: ${props => props.TypeInfo === "address" ? props.theme["purple-500"] : null};
    background-color: ${props => props.TypeInfo === "deliveryTime" ? props.theme["yellow-500"] : null};
    background-color: ${props => props.TypeInfo === "paymentMethod" ? props.theme["yellow-700"] : null};

    svg{
        color: ${props => props.theme["white"]};
    }

    p{
        color: ${props => props.theme["text"]};
    }
`;