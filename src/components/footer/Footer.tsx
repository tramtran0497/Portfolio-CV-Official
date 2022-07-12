import React, { useEffect, useState } from 'react';
import {
  Container,
  Copy,
  Contact,
  ContactTitle,
  Button,
  Input,
  Social,
  SocialItem,
  Success,
} from './styles';
import { FaDocker, FaGithub, FaLinkedin, FaLocationArrow } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { AiOutlineCheckCircle } from 'react-icons/ai';

type FooterProps = {};

const Footer: React.FunctionComponent<FooterProps> = () => {
  const [isSent, setIsSent] = useState(false);
  const service = process.env.REACT_APP_SERVICE_ID as string;
  const template = process.env.REACT_APP_TEMPLATE_ID as string;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY as string;
  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    emailjs.sendForm(service, template, event.currentTarget, publicKey).then(
      (result) => {
        console.log(result.text);
        setIsSent(true);
      },
      (error) => {
        console.log(error.text);
        setIsSent(false);
      }
    );
    event.currentTarget.reset();
  };
  useEffect(() => {
    const timeId = setTimeout(() => {
      setIsSent(false);
    }, 3000);

    return () => {
      clearTimeout(timeId);
    };
  }, [isSent]);
  return (
    <Container>
      <Copy>copyright © 2022 . Tram Tran</Copy>
      <Contact onSubmit={sendEmail}>
        <ContactTitle>Leave your contact here! Thank you.</ContactTitle>
        <Input placeholder="Eg: Tram" name="name" />
        <Input placeholder="Eg: tram@gmail" name="email" />
        <Input placeholder="Eg: 041-xxx-xxxx" name="phoneNumber" />
        <Input placeholder="Eg: Offering a position" name="message" />
        <Button>
          SENDING
          <FaLocationArrow style={{ fontSize: '20px', marginLeft: '10px' }} />
        </Button>
        {isSent ? (
          <Success>
            <AiOutlineCheckCircle style={{ margin: '20px 10px' }} />
            Thanks for sending your words to me! I contact you as soon as possible.
          </Success>
        ) : (
          <Success></Success>
        )}
      </Contact>
      <Social>
        <a href="https://hub.docker.com/u/tramtran0497" target="_blank" rel="noreferrer">
          <SocialItem>
            <FaDocker />
          </SocialItem>
        </a>
        <a href="https://github.com/tramtran0497" target="_blank" rel="noreferrer">
          <SocialItem>
            <FaGithub style={{ margin: '0 30px' }} />
          </SocialItem>
        </a>
        <a href="https://www.linkedin.com/in/tram-tran-924301207/" target="_blank" rel="noreferrer">
          <SocialItem>
            <FaLinkedin />
          </SocialItem>
        </a>
      </Social>
    </Container>
  );
};

export default Footer;
