import styled from "styled-components";

export const CheckoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${props => props.theme["card"]};
    width: 40%;
`;

export const Title = styled.h3`
    font-family: 'Baloo 2', cursive;
    font-weight: bold;
    font-size: 1.125rem;
    line-height: 1.4625rem;
    color: ${props => props.theme["subtitle"]};
    background-color: ${props => props.theme["background"]};
    padding-top: 30px;
    padding-bottom: 15px;
`;
