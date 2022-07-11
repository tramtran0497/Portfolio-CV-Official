import fw from '../images/flagWorld.png';
import tt from '../images/teetea.png';
import cv from '../images/cv.png';

export type ProjectProps = {
  image: string;
  nameImg: string;
  techStacks: string[];
  title: string;
  introText: string;
  link: string;
};

export const flagWorld: ProjectProps = {
  image: fw,
  nameImg: 'flag-world',
  techStacks: ['React(Hook)', 'Redux(Thunk)', 'SCSS/CSS', 'Javascript', 'Docker'],
  title: 'Flag World',
  introText:
    'The project brings to you the simple flag shop, it shows all flags of all countries in the world as well as information which belongs to this country.  You can add flags in your cart and add love as well, your cart or love list are always updated each time clicking icons in Home page, Country page even in Navbar.',
  link: ' https://relaxed-bardeen-73b157.netlify.app/',
};

export const teeTea: ProjectProps = {
  image: tt,
  nameImg: 'tee-tea',
  techStacks: [
    'NextJS',
    'Javascript',
    'React (Hook)',
    'Redux',
    'Nodejs',
    'Express',
    'MongoDB',
    'MongoDB CLoud',
    'Cloudinary',
    'JWT',
    'Bcryptjs',
    'SendGrid',
  ],
  title: 'Tee Tea',
  introText:
    'The Full-stack project is named TeeTea, it is the restaurant website for ordering food and drink, booking a table. You can create your own account and use many services which are provided by TeeTea restaurant. Besides, customers can send a form such as complaining, asking a help or simple compliments directly.',
  link: 'https://62a59ada34343a381257ac12--cosmic-biscochitos-6214d8.netlify.app/',
};

export const profile: ProjectProps = {
  image: cv,
  nameImg: 'profile',
  techStacks: ['React(Hook)', 'Styled-components', 'Typescript', 'AOS', 'React-Dom-Route'],
  title: 'Curriculum vitae',
  introText: 'This is my own profile, you can see my whole world through the website.',
  link: '',
};
