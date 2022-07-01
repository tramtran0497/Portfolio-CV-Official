import React from 'react';
import {Container, Wrapper} from '../styles/ProjectsStyles';
import projectsBg from '../images/projectdBg.png';
import Title from '../components/titlePage/Title';
import ProjectCard from '../components/project/ProjectCard';
import flagWorld from '../images/flagWorld.png';
type ProjectsProps = {

};

const Projects: React.FunctionComponent<ProjectsProps> = () => (
    <Container>
        <Title bg={projectsBg} title="PROJECTS" top="40%" left="30%"/>
        <Wrapper>
            <ProjectCard image={flagWorld} nameImg="flag-world" techStacks="Rect, Redux" title="Flag World" introText="ABC"/> 
        </Wrapper>
    </Container>
);

export default Projects;