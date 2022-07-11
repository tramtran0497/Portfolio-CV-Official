import React, { useState } from 'react';
import { FaGraduationCap, FaBook } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import { EducationItem, GraduationName, ImageWrapper, Description, Image } from './styles';
type EducationCardProps = {
  image: string;
  nameImage: string;
  nameIcon: string;
  nameEvent: string;
  time: string;
  position: string;
  others: string;
};

const EducationCard: React.FunctionComponent<EducationCardProps> = ({
  image,
  nameImage,
  nameIcon,
  nameEvent,
  time,
  position,
  others,
}) => {
  const [isShowed, setIsShowed] = useState(false);
  return (
    <EducationItem>
      {nameIcon === 'Graduation' ? (
        <FaGraduationCap style={{ fontSize: '25px' }} />
      ) : nameIcon === 'Study' ? (
        <FaBook style={{ fontSize: '25px' }} />
      ) : nameIcon === 'Work' ? (
        <MdWork style={{ fontSize: '25px' }} />
      ) : null}
      <GraduationName onClick={() => setIsShowed(!isShowed)}>{nameEvent}</GraduationName>
      <ImageWrapper>
        <Image src={image} alt={nameImage} />
      </ImageWrapper>
      {isShowed ? (
        <Description>
          {time}
          <br />
          {position}
          <br />
          {others}
        </Description>
      ) : null}
    </EducationItem>
  );
};

export default EducationCard;
