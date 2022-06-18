import React from 'react';
import Home from './Pages/Home';
import MyWords from './Pages/MyWords';
import NavBar from './components/navbar/NavBar';
import logo from './images/logo.png';
import { Container, Header, Logo, Footer, Copy, Contact, ContactTitle, Button, Input, Social, SocialItem } from './appStyles';
import { FaDocker, FaGithub, FaLinkedin, FaLocationArrow } from "react-icons/fa";
import ItFields from './Pages/ItFields';

const App: React.FunctionComponent = () => {

  const listFE = ["HTML", "CSS/SCSS", "JAVASCRIPT", "TYPESCRIPT", "REACT(HOOK)", "REACT-NATIVE", "REDUX", "NEXTJS"];
  const listBE = ["NODEJS (EXPRESS)", "REST API", "MONGODB", "MONGO CLOUD"];
  const listDevOp = ["DOCKER"];
  const listOthers = ["MATERIALS UI", "BOOTSTRAP", "RECHARTS", "CLOUDINARY", "EMAILJS", "SENDGRID"];

  return (
    <Container>
      <Header>
        <Logo>
            <img src={logo} alt="logo" />
        </Logo>
        <NavBar/>
      </Header>
      {/* <Home/> */}
      {/* <MyWords/> */}
      <ItFields listFrontEnd={listFE} listBackEnd={listBE} listDevOp={listDevOp} listOthers={listOthers}/>
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
          <SocialItem><FaDocker/></SocialItem>
          <SocialItem><FaGithub style={{margin: "0 30px"}}/></SocialItem>
          <SocialItem><FaLinkedin/></SocialItem>
        </Social>
      </Footer>
    </Container>
  );
}

export default App;
