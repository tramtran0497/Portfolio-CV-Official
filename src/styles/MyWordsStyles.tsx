import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BiologyWrapper = styled.div`
  width: calc(100vw - 200px);
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  @media only screen and (min-width: 768px) {
    width: calc(100vw - 100px);
    padding: 0 50px;
  }
  @media only screen and (min-width: 992px) {
    width: calc(100vw - 150px);
    padding: 0 75px;
  }

  @media only screen and (min-width: 1200px) {
    width: calc(100vw - 200px);
    padding: 0 100px;
  }
`;

export const AvatarWrapper = styled.div`
  width: 220px;
  height: 500px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 8px 10px 10px 3px lightgray;
  margin-right: 20px;
  @media only screen and (min-width: 768px) {
    height: 280px;
  }

  @media only screen and (min-width: 992px) {
    height: 280px;
  }

  @media only screen and (min-width: 1200px) {
    height: 280px;
  }
`;

export const Image = styled.img`
  width: 90%;
  height: 125%;
`;

export const Biology = styled.div`
  flex: 2;
  margin-left: 10px;
`;

export const TitleBiology = styled.h2`
  font-size: 40px;
  font-weight: 300;
  text-align: center;
  @media only screen and (min-width: 768px) {
    font-size: 28px;
    margin-bottom: 20px;
  }

  @media only screen and (min-width: 992px) {
    font-size: 32px;
    margin-bottom: 20px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 40px;
    margin-bottom: 20px;
  }
`;

export const Text = styled.div`
  margin: 0 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  letter-spacing: 0.5px;
  line-height: 28px;
  @media only screen and (min-width: 768px) {
    font-size: 15px;
  }

  @media only screen and (min-width: 992px) {
    font-size: 17px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 20px;
  }
`;

export const StoryWrapper = styled.div`
  width: calc(100vw - 200px);
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  background-color: #302b2b;
`;

export const StoryTitle = styled.h2`
  font-size: 40px;
  font-weight: 300;
  color: wheat;
  @media only screen and (min-width: 768px) {
    font-size: 25px;
  }
  @media only screen and (min-width: 992px) {
    font-size: 30px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 40px;
  }
`;

export const Story = styled.p`
  width: 70%;
  color: white;
  align-self: flex-end;
  letter-spacing: 0.5px;
  line-height: 30px;
  font-size: 19px;
  text-align: justify;
  @media only screen and (min-width: 768px) {
    font-size: 17px;
    width: 80%;
  }
  @media only screen and (min-width: 992px) {
    font-size: 19px;
    width: 80%;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 19px;
    width: 70%;
  }
`;
