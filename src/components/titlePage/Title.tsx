import React from 'react';
import {TitleWrapper, TitleHead} from './styles';
type TitleProps = {
    bg: string,
    title: string
};

const Title: React.FunctionComponent<TitleProps> = ({bg, title}) => (
    <TitleWrapper bg={bg}>
        <TitleHead>{title}</TitleHead>
    </TitleWrapper>
);

export default Title;