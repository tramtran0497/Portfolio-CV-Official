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
    justify-content: space-around;
    padding: 100px 0 ;
`

export const Time = styled.div`
    flex: 1;
    height: max-content;
    display: flex;
    justify-content: center;
    position: relative;
`

export const TimeTree = styled.div`
    width: 6px;
    height: 225vh;
    background-color: #e2aa27;
    border: 10px solid #b46363;
`

export const TimePeriod = styled.div`
    position: absolute;
    font-size: 25px;
    transition: all .25s ease-in;
    left: 35%;
`

export const CertificateWrapper = styled.div`
    flex: 2;
    position: relative;
`

