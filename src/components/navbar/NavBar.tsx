import React from 'react';
import {Container, NavItem} from './styles';
import {Link} from "react-router-dom";

type NavBarProps = {

};

const NavBar: React.FunctionComponent<NavBarProps> = () => (
    <Container>
        <Link to="/" style={{textDecoration: "none"}}>
            <NavItem>
                Home
            </NavItem>
        </Link>
        <Link to="/mywords" style={{textDecoration: "none"}}>
            <NavItem>
                My Words
            </NavItem>
        </Link>
        <Link to="/itfields" style={{textDecoration: "none"}}>
            <NavItem>
                IT Fields
            </NavItem>
        </Link>
        <Link to="/certificate" style={{textDecoration: "none"}}>
            <NavItem>
                Certificates
            </NavItem>
        </Link>
        <Link to="/education" style={{textDecoration: "none"}}>
            <NavItem>
                Education
            </NavItem>
        </Link>
        <Link to="/projects" style={{textDecoration: "none"}}>
            <NavItem>
                Projects
            </NavItem>
        </Link>
    </Container>
);

export default NavBar;