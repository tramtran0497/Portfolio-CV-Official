import React from 'react';
import { Container, Time, TimeTree, TimePeriod, CertificateWrapper, Wrapper } from '../styles/CertificateStyles';
import certificate1 from '../images/certificate2021(1).png';
import certificate2 from '../images/certificate2021(2).png';
import certificate3 from '../images/certificate2021(3).png';
import certificate4 from '../images/certificate2022(1).png';
import Title from '../components/titlePage/Title';
import certificateBg from '../images/certificateBg.png';
import CertificateCard from '../components/certificateCard/CertificateCard';

type CertificateProps = {

};

const Certificate: React.FunctionComponent<CertificateProps> = () => (
    <Container>
        <Title bg={certificateBg}/>
        <Wrapper>
            <Time>
                <TimeTree/>
                <TimePeriod style={{top: "0%"}}>2021</TimePeriod>
                <TimePeriod style={{top: "72%"}}>2022</TimePeriod>
            </Time>

            <CertificateWrapper>
                <hr/>
                <CertificateCard image={certificate1} nameImage="certificate1" certificateName="Certificate of Javascript Algorithms and Data Structures" top="13%"/>
                <CertificateCard image={certificate2} nameImage="certificate2" certificateName="Certificate of Responsive Web Design" top="37%"/>
                <CertificateCard image={certificate3} nameImage="certificate3" certificateName="Certificate of The Web Developer Bootcamp 2021" top="62%"/>
                <hr/>
                <CertificateCard image={certificate4} nameImage="certificate4" certificateName="Certificate of Node.js Developer Course" top="87%"/>

            </CertificateWrapper>
        </Wrapper>
        
    </Container>
);

export default Certificate;