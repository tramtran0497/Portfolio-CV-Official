import styled from "styled-components";

type TitleWrapperProps = {
    bg: string
};
export const TitleWrapper = styled.div<TitleWrapperProps>`
    width: 100%;
    height: 89vh;
    background-image: url(${(props) => props.bg});
    background-repeat: no-repeat;
    opacity: 1;
    overflow: hidden;
`

export const TitleHead = styled.h1`
    position: absolute;
    top: 20%;
    left: 5%;
    font-size: 50px;
    font-weight: 300;
    letter-spacing: 4px;
`