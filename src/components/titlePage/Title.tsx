import React from 'react';
import {TitleWrapper, TitleHead} from './styles';
type TitleProps = {
    bg: string
};

const Title: React.FunctionComponent<TitleProps> = ({bg}) => (
    <TitleWrapper bg={bg}>
        <TitleHead>PASSIONS & PERSONALITY</TitleHead>
    </TitleWrapper>
);

export default Title;