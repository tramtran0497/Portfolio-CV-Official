import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: max-content;
  margin: 100px;
  @media only screen and (min-width: 768px) {
    width: 60vw;
  }

  @media only screen and (min-width: 992px) {
    width: 70vw;
  }

  @media only screen and (min-width: 1200px) {
    width: 80vw;
  }
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
  font-family: 'The Nautigal', cursive;
  font-weight: 400;
  margin-bottom: 30px;
  @media only screen and (min-width: 768px) {
    font-size: 28px;
  }

  @media only screen and (min-width: 992px) {
    font-size: 38px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 45px;
  }
`;

export const IntroWrapper = styled.div`
  height: max-content;
  background-color: #ececec;
  margin-bottom: 30px;
  overflow: hidden;
  @media only screen and (min-width: 768px) {
    width: 250px;
    padding: 20px 30px;
  }

  @media only screen and (min-width: 992px) {
    width: 350px;
    padding: 20px 30px;
  }

  @media only screen and (min-width: 1200px) {
    width: 450px;
    padding: 30px 50px;
  }
`;

export const Intro = styled.p`
  font-size: 20px;
  text-align: justify;
  letter-spacing: 1px;
  line-height: 25px;
  margin-bottom: 30px;
  @media only screen and (min-width: 768px) {
    font-size: 15px;
  }

  @media only screen and (min-width: 992px) {
    font-size: 18px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 20px;
  }
`;

export const TechStack = styled.p`
  width: 40%;
  font-size: 18px;
  letter-spacing: 1px;
  margin: 10px;
  @media only screen and (min-width: 768px) {
    font-size: 15px;
  }

  @media only screen and (min-width: 992px) {
    font-size: 18px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 20px;
  }
`;

export const TechWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  height: max-content;
`;

export const LinkAccess = styled.a`
  color: black;
  text-decoration: none;
  cursor: pointer;
  @media only screen and (min-width: 768px) {
    font-size: 15px;
  }

  @media only screen and (min-width: 992px) {
    font-size: 18px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 20px;
  }
`;
