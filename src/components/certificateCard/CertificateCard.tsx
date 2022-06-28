import React from "react";
import {ImageWrapper, Image, CertificateTitle, Container} from './styles';

type CertificateCardProps = {
    image: string,
    nameImage: string,
    certificateName: string,
    top: string,
    href: string,
};

const CertificateCard : React.FunctionComponent<CertificateCardProps> = ({image, nameImage, certificateName, top, href}) => (
    <Container>
         <ImageWrapper>
            <Image src={image} alt={nameImage}/>
        </ImageWrapper>
        <a href={href} target="_blank" rel="noreferrer">
            <CertificateTitle  style={{top: top}}>{certificateName}</CertificateTitle>
        </a>
    </Container>
);

export default CertificateCard;
