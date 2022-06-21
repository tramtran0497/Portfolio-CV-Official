import React from 'react';
import {Container, Title, TitleWrapper} from '../styles/ProjectsStyles';

type ProjectsProps = {

};

const Projects: React.FunctionComponent<ProjectsProps> = () => (
    <Container>
        <TitleWrapper>
            <Title>MY OWN PROJECTS</Title>
        </TitleWrapper>
    </Container>
);

export default Projects;