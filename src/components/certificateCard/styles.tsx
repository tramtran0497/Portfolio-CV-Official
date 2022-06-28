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

    &:hover{
        text-decoration: underline;
    }
`