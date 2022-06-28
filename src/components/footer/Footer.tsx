import React from 'react';
import {Container, Copy, Contact, ContactTitle, Button, Input, Social, SocialItem } from './styles';
import { FaDocker, FaGithub, FaLinkedin, FaLocationArrow } from "react-icons/fa";

type FooterProps = {};

const Footer: React.FunctionComponent<FooterProps> = () => (
    <Container>
        <Copy>
            copyright © 2022 . Tram Tran
        </Copy>
          <Contact id='contact'>
            <ContactTitle>Leave your contact here! Thank you.</ContactTitle>
            <Input placeholder='Eg: Tram'/>
            <Input placeholder='Eg: tram@gmail'/>
            <Input placeholder='Eg: 041-xxx-xxxx'/>
            <Button>SENDING<FaLocationArrow style={{fontSize: "20px", marginLeft: "10px"}}/></Button>
          </Contact>
          <Social>              
            <a href="https://hub.docker.com/u/tramtran0497" target="_blank" rel="noreferrer">
              <SocialItem>
                <FaDocker/>
              </SocialItem>
            </a>
            <a href="https://github.com/tramtran0497" target="_blank" rel="noreferrer">
              <SocialItem>
                <FaGithub style={{margin: "0 30px"}}/>
              </SocialItem>
            </a>
            <a href="https://www.linkedin.com/in/tram-tran-924301207/" target="_blank" rel="noreferrer">
              <SocialItem>
                <FaLinkedin/>
              </SocialItem>
            </a>
          </Social>
    </Container>
);

export default Footer;