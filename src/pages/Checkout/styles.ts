import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0rem 5.7rem;

    @media screen and (max-width: 1260px){
        padding: 0rem 2rem 2rem 2rem;
    }
`;