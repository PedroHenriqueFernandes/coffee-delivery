import styled from "styled-components";

export const InfoFormContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    padding: 2.5rem 2.5rem 2rem 2.5rem;
    border-radius: 6px;

    div{
        display: flex;
        flex-direction: column;
        gap: 0.1rem;
        height: 100%;
    }
`;

export const MapPinLineContainer = styled.div`
    display: flex;
    svg{
            color: ${props => props.theme["yellow-700"]};
        }
`;

export const CurrencyDollarContainer = styled.div`
    display: flex;
    svg{
            color: ${props => props.theme["purple-500"]};
        }
`;