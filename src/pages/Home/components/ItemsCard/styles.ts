import styled from "styled-components";

export const ItemsCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 16rem;
    height: 19.375rem;
    background: ${props => props.theme['card']};
    border-radius: 6px 36px 6px 36px;
`;

export const ItemsCardImage = styled.img`
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1rem;
`;

export const ProductType = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    background-color: ${props => props.theme['yellow-100']};
    font-size: 0.625rem;
    font-weight: bold;
    line-height: 0.8125rem;
    color: ${props => props.theme['yellow-700']};
    padding: 4px 8px;
    margin-bottom: 1rem;
`;

export const AllProductTypes = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
`;

export const ContainerTextProduct = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 13.5rem;
`;

export const ItemsCardTitle = styled.h3`
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 1.625rem;
    color: ${props => props.theme['subtitle']};
`;

export const ItemsCardSubtitle = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: regular;
    text-align: center;
    line-height: 1.1375rem;
    color: ${props => props.theme['label']};
`;