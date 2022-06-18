import React from 'react';
import {BackEnd, Container, FrontEnd, Title, TitleWrapper, ItemLevel, ItemTitle, ItemSkill, TitleField, DevOp, Others} from '../styles/ItFieldsStyles';

type ItFieldsProps = {
    listFrontEnd: string[],
    listBackEnd: string[],
    listDevOp: string[],
    listOthers: string[],
};

const ItFields: React.FunctionComponent<ItFieldsProps> = ({listFrontEnd, listBackEnd, listDevOp, listOthers}) => (
    <Container>
        <TitleWrapper>
            <Title>MY TECHNICAL SKILLS</Title>
        </TitleWrapper>

        <FrontEnd>
            <TitleField>FRONT-END</TitleField>
            {
                listFrontEnd.length ? listFrontEnd.map((item: string) => {
                    return(
                        <ItemSkill>
                            <ItemTitle>{item}</ItemTitle>
                            <ItemLevel/>
                        </ItemSkill> 
                    );     
                }) : null
            };
        </FrontEnd>

        <BackEnd>
            <TitleField>BACK-END</TitleField>
                {
                    listBackEnd.length ? listBackEnd.map((item: string) => {
                        return(
                            <ItemSkill>
                                <ItemTitle>{item}</ItemTitle>
                                <ItemLevel/>
                            </ItemSkill> 
                        );     
                    }) : null
                };
        </BackEnd>

        <DevOp>
            <TitleField>DEVOPS</TitleField>
                {
                    listDevOp.length ? listDevOp.map((item: string) => {
                        return(
                            <ItemSkill>
                                <ItemTitle>{item}</ItemTitle>
                                <ItemLevel/>
                            </ItemSkill> 
                        );     
                    }) : null
                };
        </DevOp>

        <Others>
            <TitleField>OTHERS: LIBRARIES & TOOLS</TitleField>
                {
                    listOthers.length ? listOthers.map((item: string) => {
                        return(
                            <ItemSkill>
                                <ItemTitle>{item}</ItemTitle>
                                <ItemLevel/>
                            </ItemSkill> 
                        );     
                    }) : null
                };
        </Others>
    </Container>
);

export default ItFields;