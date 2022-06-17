import styled from "styled-components";
import homeBg from '../images/homeBg.png';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-image: url(${homeBg});
    background-repeat: no-repeat;
    background-position: center; 
    background-size: cover;
`

export const Button = styled.button`
    margin-top: 400px;
    padding: 20px 30px;
    font-size: 20px;
    font-weight: 300;
    background-color: transparent;
    border: 1px solid white;
    color: white;
    transition: all .5s ease-in;
    cursor: pointer;

    &:hover {
       border: 1px solid #3d3d3d;
       background-color: #3d3d3d;
    }
`