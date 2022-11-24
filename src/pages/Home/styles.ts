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
    justify-content: space-between;
    height: 100%;
    width: 42rem;
`;

export const IntroTitle = styled.h1`
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    font-weight: extra-bold;
    line-height: 3.9rem;
    color: ${props => props.theme['title']};
`;


export const CoffeeArt = styled.div`
    height: 100%;
    width: 24rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        /* height: 22.5rem; */
        width: 28rem;
    }
`;