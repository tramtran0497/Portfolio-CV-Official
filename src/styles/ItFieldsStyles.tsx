import styled from "styled-components";
import itFieldsBg from '../images/itFieldBg.png';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: max-content;
    flex-direction: column;
`

export const TitleWrapper = styled.div`
    width: 100%;
    height: 89vh;
    background-image: url(${itFieldsBg});
    background-repeat: no-repeat;
    opacity: 1;
    overflow: hidden;
`

export const Title = styled.h1`
    position: absolute;
    top: 20%;
    left: 5%;
    font-size: 50px;
    font-weight: 300;
    letter-spacing: 4px;
`

export const FrontEnd = styled.div`
    width: calc(100% - 200px);
    padding: 100px;
    display: flex;
    flex-direction: column;
`

export const FrontEndTitle = styled.h2`
    font-weight: 300;
    letter-spacing: 5px;
`

export const ItemSkill = styled.div`
    width: 80%;
    margin-left: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const ItemTitle = styled.h3`
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 3px;
    line-height: 30px;
    margin-right: 20px;
    width: 20%;
    text-align: end;
`

export const ItemLevel = styled.div`
    &:before {
        content: "";
        width: 50%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: pink;
        border-radius: 30px;
        
    }
    border: 1px solid black;
    width: 70%;
    height: 8px;
    background-color: black;
    border-radius: 30px;
    position: relative;
    overflow: hidden;
    
`

export const BackEnd = styled.div`
    
`