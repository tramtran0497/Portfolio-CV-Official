import styled from "styled-components";

export const Description = styled.p`
    display: none;
    position: absolute;
    width: 350px;
    background-color: white;
    top: 130%;
    padding: 30px;
    line-height: 30px;
    letter-spacing: 1px;
    border-radius: 20px;
    z-index: 1;
    color: white;
    text-align: center;
    background-image: linear-gradient(to right, #DA4453, #89216B) ;
`
export const EducationItem = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    transition: all .5s ease-in;

    &:hover ${Description} {
        display: block;
    }
` 

export const GraduationName = styled.p`
    margin-left: 20px;
    font-size: 20px;
` 

export const ImageWrapper = styled.div`
    width: 100px;
    height: 50px;
    margin-left: 20px;
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`
