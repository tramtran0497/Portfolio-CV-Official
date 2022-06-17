import styled from "styled-components";

export const Container = styled.ul`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    list-style: none;
`

export const NavItem = styled.li`
    font-weight: 400;
    font-size: 20px;
    cursor: pointer;
    transition: all .25s ease-in;
    padding:10px;
    position: relative;
    z-index: 0;

    &:before, &:after {
        position: absolute;
        opacity: 0;
        width: 0%;
        height: 2px;
        content: '';
        background: #FFF;
        transition: all 0.3s;
    }

    &:before {
        left: 0px;
        top: 0px;
    }

    &:after {
        right: 0px;
        bottom: 0px;
    }
    
    &:hover:before, &:hover:after {
        opacity: 1;
        width: 100%;
    }

    
`