import React from 'react';
import {Container, NavItem} from './styles';
import {Link} from "react-router-dom";

type NavBarProps = {

};

const NavBar: React.FunctionComponent<NavBarProps> = () => (
    <Container>
        <NavItem>
            <Link  to="/">Home</Link>
        </NavItem>
        <NavItem>
            <Link  to="/mywords">My Words</Link>
        </NavItem>
        <NavItem>
            <Link  to="/itfields">IT Fields</Link>
        </NavItem>
        <NavItem>
            <Link  to="/certificate">Certificates</Link>
        </NavItem>
        <NavItem>
            <Link  to="/education">Education</Link>
        </NavItem>
        <NavItem>
            <Link  to="/projects">Projects</Link>
        </NavItem>
    </Container>
);

export default NavBar;