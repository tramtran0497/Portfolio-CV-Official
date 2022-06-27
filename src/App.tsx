import React from 'react';
import Home from './Pages/Home';
import MyWords from './Pages/MyWords';
import Certificate from './Pages/Certificate';
import Education from './Pages/Education';
import NavBar from './components/navbar/NavBar';
import logo from './images/logo.png';
import { Container, Header, Logo, Footer, Copy, Contact, ContactTitle, Button, Input, Social, SocialItem, Image } from './appStyles';
import { FaDocker, FaGithub, FaLinkedin, FaLocationArrow } from "react-icons/fa";
import ItFields from './Pages/ItFields';
import Projects from './Pages/Projects';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App: React.FunctionComponent = () => {

  const listFE = ["HTML", "CSS/SCSS", "JAVASCRIPT", "TYPESCRIPT", "REACT(HOOK)", "REACT-NATIVE", "REDUX", "NEXTJS"];
  const listBE = ["NODEJS (EXPRESS)", "REST API", "MONGODB", "MONGO CLOUD"];
  const listDevOp = ["DOCKER"];
  const listOthers = ["MATERIALS UI", "BOOTSTRAP", "RECHARTS", "CLOUDINARY", "EMAILJS", "SENDGRID"];

  return (
    <Container>
      <BrowserRouter>
        <Header>
          <Logo>
              <Link to="/">
                <Image src={logo} alt='logo'/>
              </Link>
          </Logo>
          <NavBar/>
        </Header>
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mywords" element={<MyWords />} />
          <Route path="/itfields" element={<ItFields listFrontEnd={listFE} listBackEnd={listBE} listDevOp={listDevOp} listOthers={listOthers}/>} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>

        <Footer>
          <Copy>
            copyright © 2022 . Tram Tran
          </Copy>
          <Contact>
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

            <SocialItem><FaGithub style={{margin: "0 30px"}}/></SocialItem>
            <SocialItem><FaLinkedin/></SocialItem>
          </Social>
        </Footer>
      </BrowserRouter>
    </Container>
  );
}

export default App;
