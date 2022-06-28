import React from 'react';
import { Container, Button } from '../styles/HomeStyles';
import {Link} from 'react-router-dom';
type HomeProps = {

}

const Home: React.FunctionComponent<HomeProps> = () => (
    <Container>
        <a href='#contact' target="_self">
            <Button>
                CONTACT ME
            </Button>
        </a>
    </Container>
);

export default Home;