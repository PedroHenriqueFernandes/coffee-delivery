import styled from "styled-components";

export const OrderSumaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme["card"]};
    padding: 0rem 2.5rem 1.5rem 2.5rem;
    margin-top: -0.5rem;
    gap: 0.75rem;
`;

export const ContainerTexts = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;
