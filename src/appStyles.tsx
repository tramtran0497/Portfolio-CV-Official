import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: transparent;
`;

export const Header = styled.div`
  &:before {
    content: '';
    width: 100vw;
    height: 13vh;
    background-color: black;
    opacity: 0.6;
    z-index: 0;
    position: absolute;
    top: 0px;
    left: 0px;
  }

  width: calc(100vw - 60px);
  display: flex;
  position: fixed;
  top: 0;
  justify-content: space-around;
  color: white;
  top: 0px;
  left: 0px;
  padding: 20px 30px;
  z-index: 2;
`;
