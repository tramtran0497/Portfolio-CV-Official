import React from "react";
import { ProjectProps } from "../../data/projectsData";
import {Container, Right, Image, Left, Title, IntroWrapper, Intro, TechStack, TechWrapper} from "./styles";

type ProjectCardProps = {
    project: ProjectProps, 
};

const ProjectCard: React.FunctionComponent<ProjectCardProps> = ({project}) => {
    return(
        <Container>
            <Right>
                <Image src={project.image} alt={project.nameImg}/>
            </Right>
            <Left>
                <Title>{project.title}</Title>
                <IntroWrapper>
                    <Intro>{project.introText}</Intro>
                    <TechWrapper>
                        {
                            project.techStacks && project.techStacks.map((stack: string) => <TechStack>{stack}</TechStack>)
                        }
                    </TechWrapper>
                </IntroWrapper>
                
            </Left>
        </Container>
    );
};

export default ProjectCard;