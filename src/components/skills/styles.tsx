import styled, { keyframes } from 'styled-components';

const levelAnimation = keyframes`
    100%{
        transform: scaleX(1);
    }
`;

export const Container = styled.div`
  width: 70%;
  margin: 50px;
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  height: max-content;
  background-color: #f2d6f8;
  box-shadow: 5px 6px 7px 1px rgba(166, 166, 166, 0.67);
  position: relative;
`;

export const TitleField = styled.h2`
  font-weight: 300;
  letter-spacing: 5px;
  margin-bottom: 30px;
`;

export const ItemSkill = styled.div`
  width: 80%;
  margin-left: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const ItemTitle = styled.h3`
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 3px;
  line-height: 30px;
  margin-right: 20px;
  width: 30%;
  text-align: end;
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
  height: 10px;
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
`;
