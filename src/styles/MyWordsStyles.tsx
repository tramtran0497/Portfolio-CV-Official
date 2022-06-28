import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const BiologyWrapper = styled.div`
    width: calc(100vw - 200px);
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px;
`

export const AvatarWrapper = styled.div`
    flex: 1;
    height: 500px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 8px 10px 10px 3px lightgray;
    margin-right: 20px;
`

export const Image = styled.img`
    width: 90%;
    height: 125%;
`

export const Biology = styled.div`
    flex: 2;
    margin-left: 10px;
`

export const TitleBiology = styled.h2`
    font-size: 40px;
    font-weight: 300;
    text-align: center;
`

export const Text = styled.div`
    margin: 0 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    letter-spacing: 1px;
    line-height: 30px;
`

export const StoryWrapper = styled.div`
    width: calc(100vw - 200px);
    padding: 0 100px;
    display: flex;
    flex-direction: column;
`

export const StoryTitle = styled.h2`
    font-size: 40px;
    font-weight: 300;
`

export const Story = styled.p`
    width: 70%;
    align-self: flex-end;
    letter-spacing: 1px;
    line-height: 30px;
    font-size: 18px;
    text-align: justify;
`

