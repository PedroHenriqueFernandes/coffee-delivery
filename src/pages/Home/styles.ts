import styled from 'styled-components';
import imageBackgroundIntro from '../../assets/background.png';

export const IntroContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-image: url(${imageBackgroundIntro});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: calc(100vh - 6.5rem);
    width: 100%;
    padding: 5rem 10rem;
    gap: 3.5rem;
`;

export const IntroTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    width: 37rem;
    gap: 1rem;
`;

export const IntroTitle = styled.h1`
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    font-weight: extra-bold;
    line-height: 3.9rem;
    color: ${props => props.theme['title']};
`;

export const IntroText = styled.p`
    font-size: 1.25rem;
    font-weight: regular;
    line-height: 1.625rem;
`;


export const CoffeeArt = styled.div`
    height: 100%;
    width: 30rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        /* height: 22.5rem; */
        width: 30rem;
    }
`;

export const IntroItems = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    height: 100%;
    width: 37rem;
`;

export const IntroItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    font-size: 1rem;
    line-height: 1.3rem;
`;

export const IconItemsIntro = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 8px;
    border-radius: 50%;
    background-color: ${props => props.theme['yellow-700']};

    svg{
        color: ${props => props.theme['white']};
    }
`;