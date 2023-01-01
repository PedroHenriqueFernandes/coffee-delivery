import styled from 'styled-components';
import imageBackgroundIntro from '../../assets/Background.svg';

export const IntroContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    background-image: url(${imageBackgroundIntro});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: calc(100vh - 6.5rem);
    width: 100%;
    padding: 5.875rem 5.7rem;

    @media screen and (max-width: 1260px){
        height: auto;
    }

    @media screen and (max-width: 500px){
        padding: 0rem 2rem 2rem 2rem;
    }
`;

export const IntroTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    min-width: 57%;
    max-width: 57%;
    gap: 1rem;

    @media screen and (max-width: 1260px){
        width: 100%;
        max-width: 100%;
        min-width: 100%;
    }

    @media screen and (max-width: 500px){
        h1{
            font-size: 1.7rem;
            line-height: 2rem;
            text-align: center;
        }

        p{
            text-align: center;
        }
    }
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
    width: 43%;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        /* height: 22.5rem; */
        width: 100%;
    }

    @media screen and (max-width: 1260px){
        display:none;
    }
`;

export const IntroItems = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    justify-content: center;
    gap: 1.25rem;
    height: 100%;
    max-width: 39rem;
    padding-top: 2.0625rem;

    @media screen and (max-width: 1260px){
        justify-content: flex-start;
        width: 100%;
        max-width: auto;
        padding-top: 1rem;
    }
`;

export const IntroItemLeft = styled(IntroItems)`
    width: 16rem;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 0rem;
    flex-wrap: nowrap;
`;

export const IntroItemRight = styled(IntroItems)`
    width: 21rem;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 0rem;

    @media screen and (max-width: 1260px){
        width: auto;
    }
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

    svg{
        color: ${props => props.theme['white']};
    }
`;

export const IconItemsIntroYellow = styled(IconItemsIntro)`
    background-color: ${props => props.theme['yellow-700']};
`;

export const IconItemsIntroGray = styled(IconItemsIntro)`
    background-color: ${props => props.theme['text']};
`;

export const IconItemsIntroYellowLight = styled(IconItemsIntro)`
    background-color: ${props => props.theme['yellow-500']};
`;

export const IconItemsIntroPurple = styled(IconItemsIntro)`
    background-color: ${props => props.theme['purple-700']};
`;