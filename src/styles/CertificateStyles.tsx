import styled from 'styled-components';
import certificateBg from '../images/certificateBg.png';

export const Container = styled.div`
    width: 100vw;
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const TitleWrapper = styled.div`
    width: 100vw;
    height: 89vh;
    text-align: center;
    background-image: url(${certificateBg});
    background-repeat: no-repeat;
    opacity: 1;
    overflow: hidden;
`

export const Title = styled.h1`
    position: absolute;
    top: 20%;
    left: 40%;
    font-size: 70px;
    font-weight: 300;
    letter-spacing: 4px;
`

export const CertificateWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 100px 0 ;
`

export const Time = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    position: relative;
`

export const TimeTree = styled.div`
    width: 3px;
    height: 180vh;
    background-color: black;
`

export const TimePeriod = styled.div`
    position: absolute;
    font-size: 20px;
    transition: all .25s ease-in;
    left: 35%;
    cursor: pointer;

     &:hover {
        color: #f8c652;
     }
`

export const Certificates = styled.div`
    flex: 2;
    position: relative;


`

export const ImageWrapper = styled.div`
    height: 300px;
    width: 400px;
    overflow: hidden;
    margin: 30px 0 ;
    cursor: pointer;

`

export const CertificateTitle = styled.div`
    position: absolute;
    font-size: 20px;
    left: 46%;
`
