import React from 'react';
import { Container, TitleWrapper, Title, Time, TimeTree, TimePeriod, CertificateWrapper, CertificateTitle, Certificates, ImageWrapper } from '../styles/CertificateStyles';
import certificate1 from '../images/certificate2021(1).png';
import certificate2 from '../images/certificate2021(2).png';
import certificate3 from '../images/certificate2021(3).png';
import certificate4 from '../images/certificate2022(1).png';


type CertificateProps = {

};

const Certificate: React.FunctionComponent<CertificateProps> = () => (
    <Container>
        <TitleWrapper>
            <Title>CERTIFICATES</Title>
        </TitleWrapper>

        <CertificateWrapper>
            <Time>
                <TimeTree/>
                <TimePeriod style={{top: "0%"}}>2021</TimePeriod>
                <TimePeriod style={{top: "72%"}}>2022</TimePeriod>
            </Time>

            <Certificates>
                <hr/>
                <ImageWrapper>
                    <img src={certificate1} alt="certificate1" style={{width: "100%", height: "100%"}}/>
                </ImageWrapper>
                <CertificateTitle  style={{top: "13%"}}>Certificate of Javascript Algorithms and Data Structures</CertificateTitle>

                <ImageWrapper>
                    <img src={certificate2} alt="certificate2" style={{width: "100%", height: "100%"}}/>
                </ImageWrapper>
                <CertificateTitle  style={{top: "37%"}}>Certificate of Responsive Web Design</CertificateTitle>

                <ImageWrapper>
                    <img src={certificate3} alt="certificate3" style={{width: "100%", height: "100%"}}/>
                </ImageWrapper>
                <CertificateTitle  style={{top: "62%"}}>Certificate of The Web Developer Bootcamp 2021</CertificateTitle>

                <hr/>

                <ImageWrapper>
                    <img src={certificate4} alt="certificate4" style={{width: "100%", height: "100%"}}/>
                </ImageWrapper>
                <CertificateTitle  style={{top: "87%"}}>Certificate of Node.js Developer Course</CertificateTitle>
            </Certificates>
        </CertificateWrapper>
        
    </Container>
);

export default Certificate;