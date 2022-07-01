import React from 'react';
import {TitleWrapper, TitleHead} from './styles';
type TitleProps = {
    bg: string,
    title: string,
    top: string,
    left: string
};

const Title: React.FunctionComponent<TitleProps> = ({bg, title, top, left}) => (
    <TitleWrapper bg={bg}>
        <TitleHead style={{top: top, left: left}}>{title}</TitleHead>
    </TitleWrapper>
);

export default Title;