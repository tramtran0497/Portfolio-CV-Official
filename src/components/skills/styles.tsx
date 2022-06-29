import styled from "styled-components";

export const Container = styled.div`
    width: calc(100% - 200px);
    padding: 50px 100px;
    display: flex;
    flex-direction: column;
    height: max-content;
`

export const TitleField = styled.h2`
    font-weight: 300;
    letter-spacing: 5px;
    margin-bottom: 30px;
`

export const ItemSkill = styled.div`
    width: 80%;
    margin-left: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 20px;
`

export const ItemTitle = styled.h3`
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 3px;
    line-height: 30px;
    margin-right: 20px;
    width: 30%;
    text-align: end;
`

type ItemLevelProps = {
    level: string
};

export const ItemLevel = styled.div<ItemLevelProps>`
    &:before {
        content: "";
        width: ${props => props.level};
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #4b4b4b;
        border-radius: 30px;
        
    }
    border: 1px solid black;
    width: 70%;
    height: 10px;
    background-color: #f3d3d9;
    border-radius: 30px;
    position: relative;
    overflow: hidden;
    
`