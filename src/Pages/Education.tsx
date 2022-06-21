import React from 'react';
import {Container, TitleWrapper, Title, EducationItem, EducationWrapper, GraduationName, TimeTree, Description, ImageWrapper} from '../styles/EducationStyles';
import { FaGraduationCap, FaBook, FaBuilding, FaUsers } from "react-icons/fa";
import cofer from '../images/coferlogo.jpeg';
import lab from '../images/LabUniLogo.jpeg';
import huihui from '../images/shibasushiLogo.png';
import integrify from '../images/integrify.png';

type EducationProps = {

};

const Education: React.FunctionComponent<EducationProps> = () => (
    <Container>
        <TitleWrapper>
            <Title>EDUCATION & EXPERIENCES</Title>
        </TitleWrapper>
        <EducationWrapper>
            <EducationItem>
                <FaGraduationCap style={{fontSize: "25px"}}/>
                <GraduationName>COLLEAGE OF FOREIGN ECONOMIC RELATION</GraduationName>
                <ImageWrapper style={{right: "57%"}}>
                    <img src={cofer} alt="Cofer Logo" style={{height: "100%", width: "100%"}}/>
                </ImageWrapper>
                <Description>
                    Time: 09/2018
                    <br/>
                    Major: Financial & Accounting
                    <br/>
                    GAP: 3.34/4
                </Description>
            </EducationItem>
            <EducationItem style={{alignSelf: "flex-end"}}>
                <FaBook style={{fontSize: "25px"}}/>
                <GraduationName>LAB UNIVERSITY OF APPLIED SCIENCES</GraduationName>
                <ImageWrapper style={{width: "100px"}}>
                    <img src={lab} alt="Lab Logo" style={{height: "100%", width: "100%"}}/>
                </ImageWrapper>
                <Description>
                    Time: 01/2020
                    <br/>
                    Major: Business Information Technology
                    <br/>
                    Current GAP: 3.84/5
                </Description>
            </EducationItem>
            <EducationItem style={{alignSelf: "flex-end"}}>
                <FaUsers style={{fontSize: "25px"}}/>
                <GraduationName>PART-TIME JOBS</GraduationName>
                <ImageWrapper>
                    <img src={huihui} alt="Hui Hui Logo" style={{height: "100%", width: "100%"}}/>
                </ImageWrapper>
                <Description>
                    Time: 06/2021
                    <br/>
                    Position: Manager Store
                    <br/>
                    Company: Hui Hui Oy
                    <br/>
                    Location: Lahti, Finland
                </Description>
            </EducationItem>
            <EducationItem style={{alignSelf: "flex-end"}}>
                <FaBuilding style={{fontSize: "25px"}}/>
                <GraduationName>INTERNSHIP</GraduationName>
                <ImageWrapper>
                    <img src={integrify} alt="Integrify Logo" style={{height: "100%", width: "100%"}}/>
                </ImageWrapper>
                <Description>
                    Time: 01/2022
                    <br/>
                    Position: Full-stack Developer
                    <br/>
                    Company: Integrify Oy
                    <br/>
                    Location: Helsinki, Finland
                </Description>
            </EducationItem>
            <EducationItem>
                <FaGraduationCap style={{fontSize: "25px"}}/>
                <GraduationName>Estimate Graduation: LAB UNIVERSITY OF APPLIED SCIENCES</GraduationName>
                <Description>
                    Time: 07/2023
                </Description>
            </EducationItem>
            <TimeTree/>
        </EducationWrapper>
       
    </Container>
);

export default Education;