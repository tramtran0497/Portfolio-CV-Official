import styled from 'styled-components';

export const Description = styled.p`
  width: 100%;
  padding: 30px;
  line-height: 30px;
  letter-spacing: 1px;
  color: white;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 992px) {
    font-size: 18px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 20px;
  }
`;
export const EducationItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  @media only screen and (min-width: 768px) {
    margin: 15px;
  }

  @media only screen and (min-width: 992px) {
    margin: 20px;
  }

  @media only screen and (min-width: 1200px) {
    margin: 30px;
  }
`;

export const GraduationName = styled.p`
  margin-left: 20px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 992px) {
    font-size: 19px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 20px;
  }
`;

export const ImageWrapper = styled.div`
  @media only screen and (min-width: 768px) {
    width: 80px;
    height: 40px;
    margin-left: 10px;
  }

  @media only screen and (min-width: 992px) {
    width: 100px;
    height: 60px;
    margin-left: 20px;
  }

  @media only screen and (min-width: 1200px) {
    width: 100px;
    height: 60px;
    margin-left: 30px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
