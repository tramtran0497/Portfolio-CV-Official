import React from "react";
import {Container, Right, Image, Left, Title, IntroWrapper, Intro, TechStack} from "./styles";

type ProjectCardProps = {
    image: string,
    nameImg: string,
    title: string,
    introText: string,
    techStacks: string,
};

const ProjectCard: React.FunctionComponent<ProjectCardProps> = ({image, nameImg, techStacks, title, introText}) => {
    return(
        <Container>
            <Right>
                <Image src={image} alt={nameImg}/>
            </Right>
            <Left>
                <Title>{title}</Title>
                <IntroWrapper>
                    <Intro>{introText}</Intro>
                </IntroWrapper>
                <TechStack>{techStacks}</TechStack>
            </Left>
        </Container>
    );
};

export default ProjectCard;