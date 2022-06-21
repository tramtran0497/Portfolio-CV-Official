import styled from 'styled-components';
import projectsBg from '../images/projectdBg.png';

export const Container = styled.div`
    width: 100vw;
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const TitleWrapper = styled.div`
    width: 100vw;
    height: 89vh;
    text-align: center;
    background-image: url(${projectsBg});
    background-repeat: no-repeat;
    opacity: 1;
    overflow: hidden;
`

export const Title = styled.h1`
    position: absolute;
    top: 75%;
    left: 20%;
    font-size: 70px;
    font-weight: 300;
    letter-spacing: 4px;
`