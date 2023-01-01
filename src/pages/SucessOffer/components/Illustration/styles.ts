import styled from "styled-components";

export const IllustrationContainer = styled.div`
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
        display: none;
    }
`;