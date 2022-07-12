import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: calc(100vw - 200px);
  padding: 50px 100px;
  @media only screen and (min-width: 768px) {
    width: calc(100vw - 100px);
    padding: 50px 50px 25px 50px;
  }

  @media only screen and (min-width: 992px) {
    width: calc(100vw - 200px);
    padding: 50px 100px;
  }

  @media only screen and (min-width: 1200px) {
    width: calc(100vw - 200px);
    padding: 50px 100px;
  }
`;

export const Copy = styled.p`
  font-size: 15px;
  position: absolute;
  align-self: flex-end;
  @media only screen and (min-width: 768px) {
    font-size: 13px;
  }

  @media only screen and (min-width: 992px) {
    font-size: 15px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 15px;
  }
`;

export const Contact = styled.form`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContactTitle = styled.h3`
  width: 80%;
  text-align: center;
  font-weight: 300;
  @media only screen and (min-width: 768px) {
    font-size: 17px;
  }

  @media only screen and (min-width: 992px) {
    font-size: 20px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 24px;
  }
`;

export const Input = styled.input`
  width: 80%;
  border: none;
  border-bottom: 1px solid black;
  padding: 0 10px;
  margin: 20px 0;

  &:focus-visible {
    outline-color: transparent;
  }
`;

export const Button = styled.button`
  display: flex;
  width: 20%;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.25s ease-in;
  align-self: flex-end;

  &:hover {
    color: #f8c652;
  }
`;

export const Success = styled.p`
  display: flex;
  height: 56px;
  align-items: center;
  color: green;
  text-align: center;
  @media only screen and (min-width: 768px) {
    width: 500px;
    font-size: 15px;
    margin-bottom: 10px;
  }

  @media only screen and (min-width: 992px) {
    width: 500px;
    font-size: 15px;
    margin-bottom: 20px;
  }

  @media only screen and (min-width: 1200px) {
    width: 600px;
    font-size: 18px;
    margin-bottom: 20px;
  }
`;

export const Social = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media only screen and (min-width: 768px) {
    flex-direction: column;
  }

  @media only screen and (min-width: 992px) {
    flex-direction: row;
  }

  @media only screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const SocialItem = styled.div`
  font-size: 30px;
  cursor: pointer;
  transition: all 0.25s ease-in;
  color: black;
  &:hover {
    color: #f8c652;
  }
  @media only screen and (min-width: 768px) {
    margin: 20px 0;
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1200px) {
  }
`;
