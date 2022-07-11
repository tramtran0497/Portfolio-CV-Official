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
`;

export const ImageLarge = styled.img`
  position: absolute;
  top: 30px;
  left: 60px;
  width: 90%;
  height: 90%;
  object-fit: contain;
  z-index: 2;
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
  font-size: 20px;
  top: 50%;
  left: 10%;
  text-align: center;
  cursor: pointer;
  transition: all 0.25s ease-in;
  color: white;

  &:hover {
    text-decoration: underline;
  }
`;
