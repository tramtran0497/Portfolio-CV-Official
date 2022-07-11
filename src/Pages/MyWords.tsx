import React from 'react';
import {
  Container,
  Biology,
  AvatarWrapper,
  Image,
  BiologyWrapper,
  TitleBiology,
  Text,
  Story,
  StoryTitle,
  StoryWrapper,
} from '../styles/MyWordsStyles';
import avatar from '../images/avatar.jpg';
import myWordsBg from '../images/myWordsBg.jpg';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import Title from '../components/titlePage/Title';

type MyWordsProps = {};

const MyWords: React.FunctionComponent<MyWordsProps> = () => (
  <Container>
    <Title bg={myWordsBg} title="PASSION & PERSONALITY" top="30%" left="39%" />
    <BiologyWrapper>
      <AvatarWrapper>
        <Image src={avatar} alt="avatar" />
      </AvatarWrapper>
      <Biology>
        <TitleBiology>A few words from myself</TitleBiology>
        <Text>
          <ImQuotesLeft style={{ alignSelf: 'flex-start' }} />
          <br />
          I am unexperienced software developer! This means that I never stop learning new things.
          The only chance getting experiences, solving problems is that I have known as much as
          possible in my field.
          <br />
          <ImQuotesRight style={{ alignSelf: 'flex-end' }} />
        </Text>
      </Biology>
    </BiologyWrapper>

    <StoryWrapper>
      <StoryTitle>My Story</StoryTitle>
      <Story>
        In order to realise my own path and which jobs make me happy in my whole life, I have wasted
        highly valuable time, 5 years.
        <br />
        <br />
        I have started many first steps with “Accounting and Finance” field in COFER colleges when I
        was 18 without objective points. At this period, in my mind, the main reason that the job
        “Accountant” is very popular in my country and I would be ensured to get a position after
        graduating. Until now, that was a simple way of thinking. That’s right! There was the big
        shock when I was an accountant.
        <br />
        <br />
        “Working in real” makes me crazy, stress and dropping my motivations after working as
        accountant in 6 months. Luckily, I realised that I still have chances to try another major.
        <br />
        <br />
        In 2020, I came back school and continue studying in Finland. My major is “Business
        Information Technology” at LAB University of Applied Sciences in Lahti city. My friends and
        my family, they always encourage and support me motivations for many first stages because
        “IT” is not a simple field. At the first class at school, I was shock by teacher’s lectures
        related to command prompt, terminal and complex syntax. They were so high levels compared to
        my IT knowledge (I have nothings in my mind except basic HTML and CSS). However, I could not
        give up and try to read clearly documents as well as watching videos, and then, I was still
        getting stuck with many given assignments near deadlines from teacher. Stressful,
        disappointed, tired and bored.
        <br />
        <br />
        Fortunately, many good friends who are the same class helped me to get out of negative
        thinkings and restart again with interesting impressions. My friends have many years in this
        field “IT” including Front and Back-End, DevOps. Because of sharing lots of touches during
        studying, I have gotten valuable advices from them. My motivations and passions came back
        miraculously. Thanks for them. I need to clarify what I would do in future? Front or
        Back-End, full stack.
        <br />
        <br />
        My choice, “Full-stack” is a word which I really want to talk to myself next 5 years. I have
        started to create the studying plan for myself from friends's great advices and shares.
        However, it was difficult to looking for online courses even though a thousand videos and
        courses on Youtube. In my mind, questions appeared one by one, which ones is suitable for
        me? How to keep me on track everyday? What I have to do next?... and so on. And then, I have
        known Udemy, FreeCodeCamp academy and a lot ofs teachers on Youtube like Mosh, Lama,
        WebDevSimplified as well as others. They guided me how to learn, how to apply
        libraries/tools in projects with many steps.
        <br />
        <br />
        Finally, I have gotten some own projects as my prizes. By the way, I always never stop
        learning and developing my skills.
      </Story>
    </StoryWrapper>
  </Container>
);

export default MyWords;
