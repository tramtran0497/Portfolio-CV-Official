import React from 'react';
import { Container, Wrapper } from '../styles/CertificateStyles';
import certificate1 from '../images/certificate2021(1).png';
import certificate2 from '../images/certificate2021(2).png';
import certificate3 from '../images/certificate2021(3).png';
import certificate4 from '../images/certificate2022(1).png';
import certificate5 from '../images/certificate2022(2).jpg';
import Title from '../components/titlePage/Title';
import certificateBg from '../images/certificateBg.jpg';
import CertificateCard from '../components/certificateCard/CertificateCard';

type CertificateProps = {};

const Certificate: React.FunctionComponent<CertificateProps> = () => (
  <Container>
    <Title bg={certificateBg} title="CERTIFICATE" top="30%" left="10%" />
    <Wrapper>
      <CertificateCard
        image={certificate1}
        nameImage="certificate1"
        certificateName="Certificate of Javascript Algorithms and Data Structures"
        top="10%"
        href="https://www.freecodecamp.org/certification/tranthanhthanhtram/javascript-algorithms-and-data-structures"
        rightSide={true}
      />
      <CertificateCard
        image={certificate2}
        nameImage="certificate2"
        certificateName="Certificate of Responsive Web Design"
        top="30%"
        href="https://www.freecodecamp.org/certification/tranthanhthanhtram/responsive-web-design"
        rightSide={false}
      />
      <CertificateCard
        image={certificate3}
        nameImage="certificate3"
        certificateName="Certificate of The Web Developer Bootcamp 2021"
        top="49%"
        href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-ec1c55a4-61cb-42ac-8d01-0b3e69bf0d72.pdf"
        rightSide={true}
      />
      <CertificateCard
        image={certificate4}
        nameImage="certificate4"
        certificateName="Certificate of Node.js Developer Course"
        top="70%"
        href="https://udemy-certificate.s3.amazonaws.com/image/UC-4d823144-5dd4-4d92-9000-a9fa04943569.jpg?v=1653729840000"
        rightSide={false}
      />
      <CertificateCard
        image={certificate5}
        nameImage="certificate5"
        certificateName="Certificate Completion Full-stack Developer"
        top="89%"
        href=""
        rightSide={true}
      />
    </Wrapper>
  </Container>
);

export default Certificate;
