import React from 'react';
import Home from './Pages/Home';
import MyWords from './Pages/MyWords';
import Certificate from './Pages/Certificate';
import Education from './Pages/Education';
import NavBar from './components/navbar/NavBar';
import ItFields from './Pages/ItFields';
import Projects from './Pages/Projects';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Container, Header } from './appStyles';
import Footer from './components/footer/Footer';
import Logo from './components/logo/Logo';
import { listBackEnd, listFrontEnd, listDevOp, listOthers, listUI } from './data/skillsData';

const App: React.FunctionComponent = () => {
  return (
    <Container>
      <HashRouter>
        <Header>
          <Logo />
          <NavBar />
        </Header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mywords" element={<MyWords />} />
          <Route
            path="/itfields"
            element={
              <ItFields
                listFrontEnd={listFrontEnd}
                listBackEnd={listBackEnd}
                listDevOp={listDevOp}
                listOthers={listOthers}
                listUI={listUI}
              />
            }
          />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </HashRouter>
    </Container>
  );
};

export default App;
