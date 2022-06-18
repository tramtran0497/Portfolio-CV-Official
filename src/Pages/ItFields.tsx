import React from 'react';
import {BackEnd, Container, FrontEnd, Title, TitleWrapper, ItemLevel, ItemTitle, ItemSkill, FrontEndTitle} from '../styles/ItFieldsStyles';

type ItFieldsProps = {
    listFrontEnd: string[],
};

const ItFields: React.FunctionComponent<ItFieldsProps> = ({listFrontEnd}) => (
    <Container>
        <TitleWrapper>
            <Title>MY TECHNICAL SKILLS</Title>
        </TitleWrapper>

        <FrontEnd>
            <FrontEndTitle>FRONT-END</FrontEndTitle>
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

        </BackEnd>
    </Container>
);

export default ItFields;