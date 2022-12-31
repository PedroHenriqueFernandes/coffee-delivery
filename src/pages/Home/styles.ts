import styled from 'styled-components';
import imageBackgroundIntro from '../../assets/Background.svg';

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
    padding: 5.875rem 5.7rem;
`;

export const IntroTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    width: 57%;
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
    width: 43%;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        /* height: 22.5rem; */
        width: 100%;
    }
`;

export const IntroItems = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    gap: 1.25rem;
    height: 100%;
    width: 37rem;
    padding-top: 2.0625rem;
`;

export const IntroItemLeft = styled(IntroItems)`
    width: 16rem;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 0rem;
`;

export const IntroItemRight = styled(IntroItems)`
    width: 21rem;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 0rem;
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