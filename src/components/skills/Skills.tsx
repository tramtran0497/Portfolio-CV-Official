import React from 'react';
import { List } from '../../data/skillsData';
import { Container, TitleField, ItemSkill, ItemTitle, ItemLevel } from './styles';

type SkillProps = {
  title: string;
  listSkills: List[];
};

const Skill: React.FunctionComponent<SkillProps> = ({ title, listSkills }) => (
  <Container>
    <TitleField>{title}</TitleField>
    {listSkills.length
      ? listSkills.map((item: List) => {
          return (
            <ItemSkill>
              <ItemTitle>{item.name}</ItemTitle>
              <ItemLevel level={item.level} />
            </ItemSkill>
          );
        })
      : null}
  </Container>
);

export default Skill;
