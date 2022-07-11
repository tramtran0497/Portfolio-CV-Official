import styled from 'styled-components';

export const Description = styled.p`
  width: 100%;
  padding: 30px;
  line-height: 30px;
  letter-spacing: 1px;
  color: white;
  font-size: 20px;
`;
export const EducationItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  margin: 30px;
`;

export const GraduationName = styled.p`
  margin-left: 20px;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const ImageWrapper = styled.div`
  width: 100px;
  height: 50px;
  margin-left: 20px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
