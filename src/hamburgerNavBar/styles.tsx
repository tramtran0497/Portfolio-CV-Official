import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  z-index: 2;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 992px) {
    display: none;
  }

  @media only screen and (min-width: 1200px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  &::before {
    content: '';
    width: 100vw;
    height: 100vh;
    background-color: black;
    opacity: 0.6;
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const NavBar = styled.ul`
  height: 50vh;
  width: 50vw;
  position: fixed;
  top: calc(50% - 25vh);
  left: calc(50% - 25vw);
  background-color: #454242;
  z-index: 1;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;
export const NavItem = styled.li`
  font-size: 20px;
  margin: 20px;
  cursor: pointer;
  color: white;
  transition: all 0.25s ease;

  &:hover {
    color: #ecb2b2;
  }
`;
