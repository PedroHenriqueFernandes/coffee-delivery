import styled from "styled-components"

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 5.7rem;
`

export const Cart = styled.div`
    height: 2.375rem;
    width: 2.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme["yellow-100"]};
    border-radius: 6px;

    svg{
        fill: ${props => props.theme["yellow-700"]};
    }
`

export const Location = styled.div`
    height: 2.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme["purple-100"]};
    border-radius: 6px;
    padding: 8px;

    svg{
        fill: ${props => props.theme["purple-500"]};
    }
`

export const CartAndLocationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    span{
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 0.875rem;
        line-height: 1.1375rem;
    }
`