import React from 'react';
import {Container,} from '../styles/ProjectsStyles';
import projectsBg from '../images/projectdBg.png';
import Title from '../components/titlePage/Title';

type ProjectsProps = {

};

const Projects: React.FunctionComponent<ProjectsProps> = () => (
    <Container>
        <Title bg={projectsBg}/>
    </Container>
);

export default Projects;