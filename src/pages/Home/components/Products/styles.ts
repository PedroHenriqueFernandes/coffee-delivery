import styled from "styled-components";

export const TitleProductsSection = styled.h2`
    font-family: 'Baloo 2', cursive;
    padding: 0 5.7rem;
    font-size: 2rem;
    font-weight: 900;
    line-height: 2.6rem;
    color: ${props => props.theme['subtitle']};
`;

export const ProductContainer = styled.div`
    padding: 5rem 5.7rem;
    padding-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
`;
