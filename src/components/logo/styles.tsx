import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  z-index: 2;
`;

export const Image = styled.img`
  cursor: pointer;
  @media only screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @media only screen and (min-width: 992px) {
    width: 50px;
    height: 50px;
  }

  @media only screen and (min-width: 1200px) {
    width: 60px;
    height: 60px;
  }
`;
