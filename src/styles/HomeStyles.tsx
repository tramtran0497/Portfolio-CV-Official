import styled from "styled-components";
import homeBg from '../images/homeBg.png';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    background-image: url(${homeBg});
    background-repeat: no-repeat;
    background-position: center; 
    background-size: cover;

`