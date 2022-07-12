import styled, { keyframes } from 'styled-components';

const levelAnimation = keyframes`
    100%{
        transform: scaleX(1);
    }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: max-content;
  background-color: #f2d6f8;
  box-shadow: 5px 6px 7px 1px rgba(166, 166, 166, 0.67);
  position: relative;
  @media only screen and (min-width: 768px) {
    width: 60%;
    padding: 25px 50px;
    margin: 25px;
  }

  @media only screen and (min-width: 992px) {
    width: 65%;
    padding: 35px 70px;
    margin: 35px;
  }

  @media only screen and (min-width: 1200px) {
    width: 65%;
    padding: 50px 100px;
    margin-top: 50px;
  }
`;

export const TitleField = styled.h2`
  font-weight: 300;
  letter-spacing: 5px;
  margin-bottom: 30px;
  @media only screen and (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 15px;
    letter-spacing: 2px;
  }

  @media only screen and (min-width: 992px) {
    font-size: 20px;
    margin-bottom: 25px;
    letter-spacing: 3px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 22px;
    margin-bottom: 25px;
    letter-spacing: 3px;
  }
`;

export const ItemSkill = styled.div`
  width: 100%;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const ItemTitle = styled.h3`
  font-weight: 300;
  line-height: 30px;
  margin-right: 20px;
  letter-spacing: 2px;
  width: 30%;
  height: max-content;
  text-align: end;
  color: #6e0663;
  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media only screen and (min-width: 992px) {
    font-size: 20px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 20px;
  }
`;

type ItemLevelProps = {
  level: string;
};

export const ItemLevel = styled.div<ItemLevelProps>`
  &:before {
    content: '';
    width: ${(props) => props.level};
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #631781;
    border-radius: 30px;
    transform: scaleX(0);
    transform-origin: left;
    animation: ${levelAnimation} 3s ease forwards;
  }
  border: 1px solid black;
  width: 70%;
  background-color: #f6f6f6;
  border-radius: 30px;
  position: relative;
  cursor: pointer;
  transition: all 1s ease;

  &::after {
    display: none;
    content: '${(props) => props.level}';
    width: 50px;
    height: 50px;
    position: absolute;
    left: ${(props) => props.level};
    top: -25px;
  }

  &:hover {
    &::after {
      display: block;
    }
  }

  @media only screen and (min-width: 768px) {
    height: 7px;
  }
  @media only screen and (min-width: 992px) {
    height: 8px;
  }

  @media only screen and (min-width: 1200px) {
    height: 10px;
  }
`;
