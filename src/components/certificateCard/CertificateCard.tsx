import React, { useState } from "react";
import {ImageWrapper, Image, CertificateTitle, Container, ImageWrapperLarge, ImageLarge} from './styles';
import { IoIosClose } from "react-icons/io";

type CertificateCardProps = {
    image: string,
    nameImage: string,
    certificateName: string,
    top: string,
    href: string,
};

const CertificateCard : React.FunctionComponent<CertificateCardProps> = ({image, nameImage, certificateName, top, href}) => {
    const [isChosen, setIsChosen] = useState(false);
    return (
    <Container>
        <ImageWrapper onClick={() => setIsChosen(!isChosen)} >
            <Image src={image} alt={nameImage}/>
        </ImageWrapper>
        {
            isChosen ? (
                <ImageWrapperLarge>
                    <IoIosClose style={{position: "absolute", top: "10px", right: "20px", fontSize: "40px"}} onClick={() => setIsChosen(!isChosen)}/>
                    <ImageLarge src={image} alt={nameImage}/>
                </ImageWrapperLarge>
            ): null
        }
        <a href={href} target="_blank" rel="noreferrer">
            <CertificateTitle  style={{top: top}}>{certificateName}</CertificateTitle>
        </a>
    </Container>
    );
};

export default CertificateCard;
