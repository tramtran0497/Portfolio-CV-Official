import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  width: calc(100vw - 200px);
  padding: 50px 100px;
`;

export const Copy = styled.p`
  font-size: 15px;
  flex: 1;
  margin: 0;
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
  font-size: 20px;
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
  align-items: center;
  color: green;
  text-align: center;
`;

export const Social = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const SocialItem = styled.div`
  font-size: 30px;
  cursor: pointer;
  transition: all 0.25s ease-in;
  color: black;
  &:hover {
    color: #f8c652;
  }
`;
