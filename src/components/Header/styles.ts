import styled from "styled-components"

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 10rem;
`

export const Cart = styled.div`
    height: 2rem;
    width: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme["yellow-100"]};
    border-radius: 6px;
`