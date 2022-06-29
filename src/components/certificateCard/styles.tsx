import styled from "styled-components";

export const Container = styled.div`
    
`

export const ImageWrapper = styled.div`
    height: 300px;
    width: 400px;
    overflow: hidden;
    margin: 30px 0 ;
    cursor: pointer;
`

export const ImageWrapperLarge = styled.div`
    width: 90vw;
    height: 80vh;
    content: "";
    background-color: #d7cece;
    z-index: 1;
    position: fixed;
    top: 120px;
    left: 50px;
`

export const ImageLarge = styled.img`
    position: absolute;
    top: 30px;
    left: 60px;
    width: 90%;
    height: 90%;
    object-fit: contain;
    z-index: 2;
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`

export const CertificateTitle = styled.div`
    position: absolute;
    font-size: 20px;
    left: 46%;
    cursor: pointer;
    transition: all .25s ease-in;
    color: black;

    &:hover{
        text-decoration: underline;
    }
`