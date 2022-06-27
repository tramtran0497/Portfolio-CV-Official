import React from 'react';
import { Container, Button } from '../styles/HomeStyles';
import {Link} from 'react-router-dom';
type HomeProps = {

}

const Home: React.FunctionComponent<HomeProps> = () => (
    <Container>
        <Button>CONTACT ME</Button>
    </Container>
);

export default Home;