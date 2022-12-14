import styled from "styled-components";

export const PaymentMethodContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 2.5rem 2rem 2.5rem;
    gap: 0.75rem;

    @media screen and (max-width: 1260px){
        padding: 1rem 1rem 1rem 1rem;
    }
`;

export const PaymentMethods = styled.div<{Method ?: string}>`
    background-color: ${props => props.theme["button"]};
    border-radius: 6px;
    display: flex;
    height: 3.5rem;
    width: 11rem;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;

    svg{
        color: ${props => props.theme["purple-500"]};
    }

    @media screen and (max-width: 1260px){
        width: 100%;
    }
`;

export const PaymentMethodCreditcard = styled(PaymentMethods)`
    border: ${props => props.Method === "Cartão de Crédito" ? "1px solid " + props.theme["purple-500"] : "none"};
    background-color: ${props => props.Method === "Cartão de Crédito" ? props.theme["purple-100"] : props.theme["button"]};
`;

export const PaymentMethodDebitCard = styled(PaymentMethods)`
    border: ${props => props.Method === "Cartão de Débito" ? "1px solid " + props.theme["purple-500"] : "none"};
    background-color: ${props => props.Method === "Cartão de Débito" ? props.theme["purple-100"] : props.theme["button"]};
`;

export const PaymentMethodMoney = styled(PaymentMethods)`
    border: ${props => props.Method === "Dinheiro" ? "1px solid " + props.theme["purple-500"] : "none"};
    background-color: ${props => props.Method === "Dinheiro" ? props.theme["purple-100"] : props.theme["button"]};
`;