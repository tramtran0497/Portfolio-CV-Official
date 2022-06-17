import React from 'react';
import Home from './Pages/Home';
import NavBar from './components/navbar/NavBar';
import logo from './images/logo.png';
import { Container, Header, Logo } from './appStyles';

const App: React.FunctionComponent = () => {
  return (
    <Container>
      <Header>
        <Logo>
            <img src={logo} alt="logo" />
        </Logo>
        <NavBar/>
      </Header>
      <Home/>
    </Container>
  );
}

export default App;
