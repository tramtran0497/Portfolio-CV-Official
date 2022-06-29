import React from 'react';
import { Container, Biology, AvatarWrapper, Image, BiologyWrapper, TitleBiology, Text, Story, StoryTitle, StoryWrapper } from '../styles/MyWordsStyles';
import avatar from '../images/avatar.jpg';
import myWordsBg from '../images/myWordsBg.png';
import { ImQuotesLeft, ImQuotesRight} from "react-icons/im";
import Title from '../components/titlePage/Title';

type MyWordsProps = {};

const MyWords: React.FunctionComponent<MyWordsProps> = () => (
    <Container>
        <Title bg={myWordsBg} title="PASSION & PERSONALITY"/>
        <BiologyWrapper>
            <AvatarWrapper>
                <Image src={avatar} alt="avatar"/>
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

        <StoryWrapper>
            <StoryTitle>Itinerary Story</StoryTitle>
            <Story>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque necessitatibus, ad magnam minus, eum nam facilis modi natus at quisquam, quia harum autem aut sequi omnis sapiente. At, optio dolorem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit reprehenderit, rem nihil nam libero ipsum est expedita, pariatur, magnam quam aperiam blanditiis enim quod nostrum nobis! Nobis consectetur velit illum?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit quidem amet eum distinctio similique accusamus reiciendis excepturi doloribus? Minus, optio libero repellat quidem ad voluptates quae nam eius vero quibusdam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ipsa molestiae amet ut inventore dolorem, quis id tempore voluptatum debitis! Mollitia itaque vel porro, ducimus ipsa non alias tempore veritatis!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque necessitatibus, ad magnam minus, eum nam facilis modi natus at quisquam, quia harum autem aut sequi omnis sapiente. At, optio dolorem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit reprehenderit, rem nihil nam libero ipsum est expedita, pariatur, magnam quam aperiam blanditiis enim quod nostrum nobis! Nobis consectetur velit illum?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit quidem amet eum distinctio similique accusamus reiciendis excepturi doloribus? Minus, optio libero repellat quidem ad voluptates quae nam eius vero quibusdam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ipsa molestiae amet ut inventore dolorem, quis id tempore voluptatum debitis! Mollitia itaque vel porro, ducimus ipsa non alias tempore veritatis!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque necessitatibus, ad magnam minus, eum nam facilis modi natus at quisquam, quia harum autem aut sequi omnis sapiente. At, optio dolorem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit reprehenderit, rem nihil nam libero ipsum est expedita, pariatur, magnam quam aperiam blanditiis enim quod nostrum nobis! Nobis consectetur velit illum?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit quidem amet eum distinctio similique accusamus reiciendis excepturi doloribus? Minus, optio libero repellat quidem ad voluptates quae nam eius vero quibusdam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ipsa molestiae amet ut inventore dolorem, quis id tempore voluptatum debitis! Mollitia itaque vel porro, ducimus ipsa non alias tempore veritatis!
            </Story>
        </StoryWrapper>
    </Container>
);

export default MyWords;