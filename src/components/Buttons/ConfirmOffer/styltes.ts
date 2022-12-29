import styled from "styled-components";

export const ContainerButtons = styled.button`
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    margin: 0.75rem 2.5rem 1rem 2.5rem;
    background: ${props => props.theme["yellow-500"]};
    border: 0;
    border-radius: 6px;
    cursor: pointer;

    p{
        color: ${props => props.theme["white"]};
    }
`;