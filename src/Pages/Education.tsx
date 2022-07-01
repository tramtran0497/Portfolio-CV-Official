import React from 'react';
import {Container, EducationWrapper} from '../styles/EducationStyles';
import cofer from '../images/coferlogo.jpeg';
import lab from '../images/LabUniLogo.jpeg';
import huihui from '../images/shibasushiLogo.png';
import integrify from '../images/integrify.png';
import Title from '../components/titlePage/Title';
import educationBg from '../images/educationBg.jpg';
import EducationCard from '../components/educationCard/EducationCard';

type EducationProps = {};

const Education: React.FunctionComponent<EducationProps> = () => (
    <Container>
        <Title bg={educationBg} title="EDUCATION & EXPERIENCES" top="50%" left="30%"/>
        <EducationWrapper>
            <EducationCard image={cofer} nameImage="cofer-logo" nameIcon="Graduation" nameEvent="COLLEGE OF FOREIGN ECONOMIC RELATION" time="Time: 09/2018" position="Major: Financial & Accounting" others="GPA: 3.34/4" rightSide={false}/>
            <EducationCard image={lab} nameImage="lab-logo" nameIcon="Study" nameEvent="LAB UNIVERSITY OF APPLIED SCIENCES" time="Time: 01/2020" position="Major: Business Information Technology" others="GPA: 3.84/5" rightSide={true}/>
            <EducationCard image={huihui} nameImage="huihui-logo" nameIcon="Work" nameEvent="PART-TIME JOBS" time="Time: 06/2021" position="Position: Manager Store" others="Company: Hui Hui Oy (Location in Lahti)" rightSide={true}/>
            <EducationCard image={integrify} nameImage="integrify-logo" nameIcon="Work" nameEvent="INTERNSHIP" time="Time: 01/2022" position="Position: Full-stack Developer" others="Company: Integrify Oy (Location in Helsinki)" rightSide={true}/>
            <EducationCard image={lab} nameImage="lab-logo" nameIcon="Graduation" nameEvent="Estimate Graduation: LAB UNIVERSITY OF APPLIED SCIENCES" time="Time: 07/2023" position="Major: Business Information Technology" others="Estimate GPA: 4/5" rightSide={false}/>
        </EducationWrapper>
       
    </Container>
);

export default Education;