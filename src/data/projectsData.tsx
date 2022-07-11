import fw from '../images/flagWorld.png';
import tt from '../images/teetea.png';
import cv from '../images/cv.png';

export type ProjectProps = {
  image: string;
  nameImg: string;
  techStacks: string[];
  title: string;
  introText: string;
};

export const flagWorld: ProjectProps = {
  image: fw,
  nameImg: 'flag-world',
  techStacks: ['React(Hook)', 'Redux(Thunk)', 'SCSS/CSS', 'Javascript', 'Docker'],
  title: 'Flag World',
  introText:
    'Home page shows a list all countries in the world with several relevant information such region, capital and so on.Country page shows detail information of the country.',
};

export const teeTea: ProjectProps = {
  image: tt,
  nameImg: 'tee-tea',
  techStacks: ['React(Hook)', 'Redux(Thunk)', 'SCSS/CSS', 'Javascript', 'Docker'],
  title: 'Tee Tea',
  introText:
    'Home page shows a list all countries in the world with several relevant information such region, capital and so on.Country page shows detail information of the country.',
};

export const profile: ProjectProps = {
  image: cv,
  nameImg: 'profile',
  techStacks: ['React(Hook)', 'Redux(Thunk)', 'SCSS/CSS', 'Javascript', 'Docker'],
  title: 'Curriculum vitae',
  introText:
    'Home page shows a list all countries in the world with several relevant information such region, capital and so on.Country page shows detail information of the country.',
};
