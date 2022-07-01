import React from 'react';
import {Container} from '../styles/ItFieldsStyles'; 
import itFieldsBg from '../images/itFieldBg.png';
import Title from '../components/titlePage/Title';
import Skill from '../components/skills/Skills';
import { List } from '../data/skillsData';

type ItFieldsProps = {
    listFrontEnd: List[],
    listBackEnd: List[],
    listDevOp: List[],
    listOthers: List[],
};

const ItFields: React.FunctionComponent<ItFieldsProps> = ({listFrontEnd, listBackEnd, listDevOp, listOthers}) => (
    <Container>
        <Title bg={itFieldsBg} title="TECHNOLOGY SKILLS" top="20%" left="10%"/>
        <Skill title="FRONT-END" listSkills={listFrontEnd}/>
        <Skill title="BACK-END" listSkills={listBackEnd}/>
        <Skill title="DEVOPS" listSkills={listDevOp}/>
        <Skill title="OTHERS: LIBRARIES & TOOLS" listSkills={listOthers}/>
    </Container>
);

export default ItFields;