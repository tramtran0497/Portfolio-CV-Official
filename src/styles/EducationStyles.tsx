import styled from 'styled-components';
import educationBg from '../images/educationBg.png';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TitleWrapper = styled.div`
    width: 100vw;
    height: 89vh;
    text-align: center;
    background-image: url(${educationBg});
    background-repeat: no-repeat;
    opacity: 1;
    overflow: hidden;
`

export const Title = styled.h1`
    position: absolute;
    top: 50%;
    left: 5%;
    font-size: 70px;
    font-weight: 300;
    letter-spacing: 4px;
`

export const EducationWrapper = styled.div`
    width: 80vw;
    height: 50vh;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: space-around;
    padding: 50px 0;
` 

export const Description = styled.p`
    display: none;
    position: absolute;
    width: 200px;
    background-color: #b5cf0c;
    top: 130%;
    padding: 30px;
    color: white;
    line-height: 30px;
    letter-spacing: 1px;
    border-radius: 20px;
    z-index: 1;
`

export const EducationItem = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    transition: all .5s ease-in;

    &:hover ${Description} {
        display: block;
    }
` 

export const GraduationName = styled.p`
    margin-left: 20px;
    font-size: 20px;
` 

export const ImageWrapper = styled.div`
    width: 50px;
    height: 50px;
    position: absolute;
    top: 120%;
    right: 10%;
`

export const TimeTree = styled.div`
    position: absolute;
    width: 3px;
    height: 80%;
    background-color: black;
    top: 10%;
    left: 60%;
` 




