import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80vw;
  height: max-content;
  margin: 100px;
`;

export const Right = styled.div`
  width: 70%;
  height: 50%;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Left = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.h2`
  font-size: 45px;
  font-family: 'The Nautigal', cursive;
  font-weight: 400;
  margin-bottom: 30px;
`;

export const IntroWrapper = styled.div`
  width: 450px;
  height: max-content;
  background-color: #ececec;
  padding: 30px 50px;
  margin-bottom: 30px;
  overflow: hidden;
`;

export const Intro = styled.p`
  font-size: 20px;
  text-align: justify;
  letter-spacing: 1px;
  line-height: 25px;
`;

export const TechStack = styled.p`
  width: 28%;
  font-size: 18px;
  letter-spacing: 1px;
  margin: 10px;
`;

export const TechWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  height: max-content;
`;
