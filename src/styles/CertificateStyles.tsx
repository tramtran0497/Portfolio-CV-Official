import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  @media only screen and (min-width: 768px) {
    padding: 0px;
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1200px) {
  }
`;
