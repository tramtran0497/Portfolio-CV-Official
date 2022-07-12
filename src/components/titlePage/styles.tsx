import styled from 'styled-components';

type TitleWrapperProps = {
  bg: string;
};
export const TitleWrapper = styled.div<TitleWrapperProps>`
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 1;
  overflow: hidden;
`;

export const TitleHead = styled.h1`
  position: absolute;
  font-size: 50px;
  font-weight: 300;
  letter-spacing: 4px;
  @media only screen and (min-width: 768px) {
    font-size: 30px;
  }

  @media only screen and (min-width: 992px) {
    font-size: 40px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 50px;
  }
`;
