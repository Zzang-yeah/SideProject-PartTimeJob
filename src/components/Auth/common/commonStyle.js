import { styled } from "styled-components";


// wrapper 
export const AuthWrapper = styled.main`
    height:100vh;
    background-color: ${(props) => props.theme.bgColors.bgGrayColor};
`


export const Title = styled.h1`
    font-size:1.25rem;
    font-weight: 700;
`
export const InfoContainer = styled.div`
    width: 630px;
    margin:0 auto;
    padding-top:100px;
`