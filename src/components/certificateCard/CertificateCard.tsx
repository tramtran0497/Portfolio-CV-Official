import React, { useState } from 'react';
import {
  ImageWrapper,
  Image,
  CertificateTitle,
  Container,
  ImageWrapperLarge,
  ImageLarge,
  CertificateTitleWrapper,
} from './styles';
import { IoIosClose } from 'react-icons/io';

type CertificateCardProps = {
  image: string;
  nameImage: string;
  certificateName: string;
  top: string;
  href: string;
  rightSide: boolean;
};

const CertificateCard: React.FunctionComponent<CertificateCardProps> = ({
  image,
  nameImage,
  certificateName,
  top,
  href,
  rightSide,
}) => {
  const [isChosen, setIsChosen] = useState(false);
  return (
    <Container style={{ alignSelf: rightSide ? 'flex-end' : 'flex-start' }}>
      <ImageWrapper onClick={() => setIsChosen(!isChosen)}>
        <Image src={image} alt={nameImage} />
      </ImageWrapper>
      {isChosen ? (
        <ImageWrapperLarge>
          <IoIosClose
            style={{ position: 'absolute', top: '10px', right: '20px', fontSize: '40px' }}
            onClick={() => setIsChosen(!isChosen)}
          />
          <ImageLarge src={image} alt={nameImage} />
        </ImageWrapperLarge>
      ) : null}
      <CertificateTitleWrapper>
        <a href={href} target="_blank" rel="noreferrer">
          <CertificateTitle style={{ top: top }}>{certificateName}</CertificateTitle>
        </a>
      </CertificateTitleWrapper>
    </Container>
  );
};

export default CertificateCard;
