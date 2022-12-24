import styled from "styled-components";

export const ButtonRemoveContainer = styled.button`
    display: flex;
    background: ${props => props.theme["button"]};
    padding: .4rem .5rem;
    gap: .25rem;
    border: 0;
    border-radius: 6px;
    cursor: pointer;

    svg{
        color: ${props => props.theme["purple-500"]};
    }
`;
