import styled, { keyframes } from 'styled-components';
import homeBg from '../images/homeBg.png';

const lineAnimation = keyframes`
    to{
        stroke-dashoffset: 0;
    }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  color: white;
  background-image: url(${homeBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media only screen and (min-width: 768px) {
    height: 60vh;
  }

  @media only screen and (min-width: 992px) {
    height: 100vh;
  }

  @media only screen and (min-width: 1200px) {
    height: 100vh;
  }
`;

export const Wrapper = styled.div`
  width: 30%;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px;
  @media only screen and (min-width: 768px) {
    width: 20%;
    height: 20vh;
    align-items: flex-end;
    margin: 20px 30px;
  }

  @media only screen and (min-width: 992px) {
    width: 25%;
    height: 20vh;
    margin: 30px;
  }

  @media only screen and (min-width: 1200px) {
    width: 30%;
    height: 20vh;
    margin: 30px;
  }
`;

export const Svg = styled.svg`
  &:nth-child(1) {
    stroke-dasharray: 509px;
    stroke-dashoffset: 509px;
    animation: ${lineAnimation} 2s ease 0s infinite forwards;
  }
  &:nth-child(2) {
    stroke-dasharray: 161px;
    stroke-dashoffset: 161px;
    animation: ${lineAnimation} 2s ease 0.5s infinite forwards;
  }
  &:nth-child(3) {
    stroke-dasharray: 97.5px;
    stroke-dashoffset: 97.5px;
    animation: ${lineAnimation} 2s ease 1s infinite forwards;
  }
  &:nth-child(4) {
    stroke-dasharray: 211px;
    stroke-dashoffset: 211px;
    animation: ${lineAnimation} 2s ease 1.5s infinite forwards;
  }
  &:nth-child(5) {
    stroke-dasharray: 69.7px;
    stroke-dashoffset: 69.7px;
    animation: ${lineAnimation} 2s ease 2s infinite forwards;
  }
  &:nth-child(6) {
    stroke-dasharray: 123px;
    stroke-dashoffset: 123px;
    animation: ${lineAnimation} 2s ease 2.5s infinite forwards;
  }
  &:nth-child(7) {
    stroke-dasharray: 166.8px;
    stroke-dashoffset: 166.8px;
    animation: ${lineAnimation} 2s ease 3s infinite forwards;
  }
  &:nth-child(8) {
    stroke-dasharray: 274.3px;
    stroke-dashoffset: 274.3px;
    animation: ${lineAnimation} 2s ease 3.5s infinite forwards;
  }
`;

type PathProps = {
  strokeWidth: string;
  strokeLineCap: string;
};

export const Path = styled.path<PathProps>`
  stroke-width: ${(props) => props.strokeWidth};
  stroke-linecap: ${(props) => props.strokeLineCap};
`;
