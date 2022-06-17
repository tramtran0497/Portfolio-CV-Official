import React from 'react';
import {Container, NavItem} from './styles';
type NavBarProps = {

};

const NavBar: React.FunctionComponent<NavBarProps> = () => (
    <Container>
        <NavItem>Home</NavItem>
        <NavItem>My Words</NavItem>
        <NavItem>IT Fields</NavItem>
        <NavItem>Certificates</NavItem>
        <NavItem>Education</NavItem>
        <NavItem>Projects</NavItem>
    </Container>
);

export default NavBar;