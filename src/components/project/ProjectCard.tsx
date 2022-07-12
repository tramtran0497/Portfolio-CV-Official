import React from 'react';
import { ProjectProps } from '../../data/projectsData';
import {
  Container,
  Right,
  Image,
  Left,
  Title,
  IntroWrapper,
  Intro,
  TechStack,
  TechWrapper,
  LinkAccess,
} from './styles';

type ProjectCardProps = {
  project: ProjectProps;
  aos: string;
};

const ProjectCard: React.FunctionComponent<ProjectCardProps> = ({ project, aos }) => {
  return (
    <Container data-aos={aos} data-aos-delay="50" data-aos-duration="1000">
      <Right>
        <Image src={project.image} alt={project.nameImg} />
      </Right>
      <Left>
        <Title>{project.title}</Title>
        <IntroWrapper>
          <Intro>{project.introText}</Intro>
          <LinkAccess href={project.link} target="_blank" rel="noreferrer">
            The Demo Link
          </LinkAccess>
          <TechWrapper>
            {project.techStacks &&
              project.techStacks.map((stack: string) => <TechStack>{stack}</TechStack>)}
          </TechWrapper>
        </IntroWrapper>
      </Left>
    </Container>
  );
};

export default ProjectCard;
