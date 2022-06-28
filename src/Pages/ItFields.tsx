import React from 'react';
import {Container} from '../styles/ItFieldsStyles'; 
import itFieldsBg from '../images/itFieldBg.png';
import Title from '../components/titlePage/Title';
import Skill from '../components/skills/Skills';

type ItFieldsProps = {
    listFrontEnd: string[],
    listBackEnd: string[],
    listDevOp: string[],
    listOthers: string[],
};

const ItFields: React.FunctionComponent<ItFieldsProps> = ({listFrontEnd, listBackEnd, listDevOp, listOthers}) => (
    <Container>
        <Title bg={itFieldsBg}/>
        <Skill title="FRONT-END" listSkills={listFrontEnd}/>
        <Skill title="BACK-END" listSkills={listBackEnd}/>
        <Skill title="DEVOPS" listSkills={listDevOp}/>
        <Skill title="OTHERS: LIBRARIES & TOOLS" listSkills={listOthers}/>
    </Container>
);

export default ItFields;