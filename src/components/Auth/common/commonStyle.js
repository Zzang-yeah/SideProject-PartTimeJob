import { styled } from "styled-components";


// wrapper 
export const AuthWrapper = styled.main`
    width:100vw;
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

export const LoginBtn = styled.button`
    background-color:#ff501b;;
    border:1px solid #ff501b;
    border-radius:10px;
    height:50px;
    border:none;
    margin-top:30px;
    font-size:20px;
    font-weight:400;
    color: white;
`

export const LoginColumn = styled.div` 
    width: 100%;
    display:flex;
    flex-direction: column;;

`

export const SignupLogin = styled.div`
    margin-top:20px;
    text-align: center;
    a{
        color:rgba(0,0,0,0.7);
        text-decoration: underline;
    }
`

export const AccountBtn = styled.button`
    background-color: #d2d2d2;
    border:none;
    color:white;
   
    padding:11px 27px;
    border-radius: 10px;
`