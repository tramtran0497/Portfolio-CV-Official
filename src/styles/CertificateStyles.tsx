import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Wrapper = styled.div`
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

export const CertificateWrapper = styled.div`
    flex: 2;
    position: relative;
`

