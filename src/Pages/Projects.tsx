import React from 'react';
import {Container, Wrapper} from '../styles/ProjectsStyles';
import projectsBg from '../images/projectdBg.png';
import Title from '../components/titlePage/Title';
import ProjectCard from '../components/project/ProjectCard';
import {flagWorld, teeTea, profile} from "../data/projectsData";
type ProjectsProps = {

};
const Projects: React.FunctionComponent<ProjectsProps> = () => {
    return(
        <Container>
            <Title bg={projectsBg} title="PROJECTS" top="40%" left="30%"/>
            <Wrapper>
                <ProjectCard project={flagWorld}/>
                <ProjectCard project={teeTea}/>
                <ProjectCard project={profile}/>
            </Wrapper>
        </Container>
    );
};
export default Projects;