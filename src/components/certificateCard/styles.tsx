import styled from 'styled-components';

export const Container = styled.div`
  width: 50vw;
  height: 50vh;
  box-shadow: 5px 6px 7px 1px rgba(166, 166, 166, 0.67);
  padding: 20px 40px;
  margin: 50px;
  border-radius: 30px;
  background-color: #523156;
  display: flex;
  align-items: center;
  @media only screen and (min-width: 768px) {
    width: 70vw;
    height: 30vh;
    padding: 20px;
    margin: 30px;
  }

  @media only screen and (min-width: 992px) {
    width: 60vw;
    height: 30vh;
    padding: 40px;
    margin: 30px;
  }

  @media only screen and (min-width: 1200px) {
    width: 55vw;
    height: 35vh;
    padding: 50px;
    margin: 35px;
  }
`;

export const ImageWrapper = styled.div`
  height: 100%;
  flex: 1;
  overflow: hidden;
  margin: 30px 0;
  cursor: pointer;
`;

export const ImageWrapperLarge = styled.div`
  width: 90vw;
  height: 80vh;
  content: '';
  background-color: #785a7b;
  z-index: 1;
  position: fixed;
  top: 120px;
  left: 50px;
  @media only screen and (min-width: 768px) {
    top: 80px;
    left: 20px;
    padding: 30px 20px;
    height: 75vh;
  }

  @media only screen and (min-width: 992px) {
    top: 90px;
    left: 30px;
    padding: 30px 20px;
    height: 70vh;
  }

  @media only screen and (min-width: 1200px) {
    top: 120px;
    left: 50px;
    padding: 30px 20px;
    height: 70vh;
  }
`;

export const ImageLarge = styled.img`
  position: absolute;
  left: 35px;
  width: 90%;
  height: 90%;
  object-fit: contain;
  z-index: 2;
  @media only screen and (min-width: 768px) {
    top: 50px;
  }

  @media only screen and (min-width: 992px) {
    top: 30px;
  }

  @media only screen and (min-width: 1200px) {
    top: 30px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const CertificateTitleWrapper = styled.div`
  flex: 1;
  position: relative;
`;

export const CertificateTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  text-align: center;
  cursor: pointer;
  transition: all 0.25s ease-in;
  color: white;

  &:hover {
    text-decoration: underline;
  }
  @media only screen and (min-width: 768px) {
    font-size: 17px;
  }

  @media only screen and (min-width: 992px) {
    font-size: 20px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 22px;
  }
`;
