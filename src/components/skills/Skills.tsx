import React from 'react';
import {Container, TitleField, ItemSkill, ItemTitle, ItemLevel} from './styles';

type SkillProps = {
    title: string,
    listSkills: string[],

};

const Skill: React.FunctionComponent<SkillProps> = ({title, listSkills}) => (
    <Container>
        <TitleField>{title}</TitleField>
        {
            listSkills.length ? listSkills.map((item: string) => {
                return(
                    <ItemSkill>
                        <ItemTitle>{item}</ItemTitle>
                        <ItemLevel/>
                    </ItemSkill> 
                );     
            }) : null
        };
    </Container>
);

export default Skill;