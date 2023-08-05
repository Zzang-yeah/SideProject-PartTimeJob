import { styled } from "styled-components";

export const Footer = styled.footer`
    width: 100%;
    height:200px;
    text-align: center;
    position: relative;
    display:flex;
    div{
        position: absolute;
        bottom:0;
        padding-bottom:30px;
    }
    background-color: ${(props) => props.theme.bgColors.bgGrayColor};
    justify-content: center;    
`