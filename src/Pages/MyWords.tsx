import React from 'react';
import { Container, TitleWrapper, Title, Biology, AvatarWrapper, BiologyWrapper, TitleBiology, Text } from '../styles/MyWordsStyles';
import avatar from '../images/avatar.jpg';
import { ImQuotesLeft, ImQuotesRight} from "react-icons/im";

type MyWordsProps = {

};

const MyWords: React.FunctionComponent<MyWordsProps> = () => (
    <Container>
        <TitleWrapper>
            <Title>PASSIONS & PERSONALITY</Title>
        </TitleWrapper>

        <BiologyWrapper>
            <AvatarWrapper>
                <img src={avatar} alt="avatar" width="90%" height="125%"/>
            </AvatarWrapper>
            <Biology>
                <TitleBiology>A few words from myself</TitleBiology>
                <Text>
                    <ImQuotesLeft style={{alignSelf: "flex-start"}}/>
                    <br/>
                    I had decided to challenge myself to new field “Information Technology” in Finland at 22, after 3 years learning “Accounting” major in VietNam. At begin, it was actually my biggest tough because of a huge of things. Fortunately, supporting online courses helps me to keep track my career path. 
                    <br/>
                    <ImQuotesRight style={{alignSelf: "flex-end"}}/>    
                </Text>
            </Biology>
        </BiologyWrapper>
    </Container>
);

export default MyWords;