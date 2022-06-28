import React from "react";
import {ImageWrapper, Image, CertificateTitle, Container} from './styles';

type CertificateCardProps = {
    image: string,
    nameImage: string,
    certificateName: string,
    top: string,
};

const CertificateCard : React.FunctionComponent<CertificateCardProps> = ({image, nameImage, certificateName, top}) => (
    <Container>
         <ImageWrapper>
            <Image src={image} alt={nameImage}/>
        </ImageWrapper>
        <CertificateTitle  style={{top: top}}>{certificateName}</CertificateTitle>
    </Container>
);

export default CertificateCard;
