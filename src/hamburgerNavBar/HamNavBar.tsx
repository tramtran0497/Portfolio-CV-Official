import React, { useState } from 'react';
import { Container, Wrapper, NavBar, NavItem } from './styles';
import { FaHamburger } from 'react-icons/fa';
import { IoIosClose } from 'react-icons/io';
import { Link } from 'react-router-dom';

type HamNavBarProps = {};

const HamNavBar: React.FunctionComponent<HamNavBarProps> = () => {
  const [isShowed, setIsShowed] = useState(false);
  return (
    <Container>
      <FaHamburger style={{ fontSize: '30px' }} onClick={() => setIsShowed(true)} />

      {isShowed ? (
        <Wrapper>
          <NavBar>
            <IoIosClose
              onClick={() => setIsShowed(false)}
              style={{
                position: 'absolute',
                fontSize: '30px',
                top: '10px',
                right: '20px',
                cursor: 'pointer',
              }}
            />
            <Link to="/" style={{ textDecoration: 'none' }}>
              <NavItem>Home</NavItem>
            </Link>
            <Link to="/mywords" style={{ textDecoration: 'none' }}>
              <NavItem>My Words</NavItem>
            </Link>
            <Link to="/itfields" style={{ textDecoration: 'none' }}>
              <NavItem>IT Fields</NavItem>
            </Link>
            <Link to="/certificate" style={{ textDecoration: 'none' }}>
              <NavItem>Certificates</NavItem>
            </Link>
            <Link to="/education" style={{ textDecoration: 'none' }}>
              <NavItem>Education</NavItem>
            </Link>
            <Link to="/projects" style={{ textDecoration: 'none' }}>
              <NavItem>Projects</NavItem>
            </Link>
          </NavBar>
        </Wrapper>
      ) : null}
    </Container>
  );
};

export default HamNavBar;
