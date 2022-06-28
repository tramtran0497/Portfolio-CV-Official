import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Image} from './styles';
import logo from '../../images/logo.png';

type LogoProps = {};

const Logo: React.FunctionComponent<LogoProps> = () => (
    <Container>
        <Link to="/">
            <Image src={logo} alt='logo'/>
        </Link>
    </Container>
);

export default Logo;