import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    gap: 40px;

    @media (max-width: 1260px) {
        width: 100%;
        gap: 20px;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;

    h1{
        color: ${props => props.theme['yellow-700']};
    }

    @media (max-width: 1260px) {
        text-align: center;
    }
`;