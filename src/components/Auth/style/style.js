import { styled } from "styled-components";

// wrapper 
export const AuthWrapper = styled.main`
    height:100vh;
    background-color: ${(props) => props.theme.bgColors.bgGrayColor};
`

// common button
export const JoinButton = styled.button`
    width:294px;
    height:50px;
    margin-top:40px;
    border:none;
    border-radius: 8px;
    background-color: ${(props)=>props.bgColor};
    font-size:18px;
    a{
        color:${(props)=>props.color};
    }
`

// auth header 
export const AuthHeader = styled.header`
    padding: 31px 0px 31px 221px;
    background-color: white;
`
export const TitleContainer = styled.div`
        display: flex;
`
export const LogoImg = styled.div`
    margin-right:20px;
`
export const Title = styled.h1`
    font-size:1.25rem;
    font-weight: 700;
`

// AuthSignUp.js
export const SignUpContainer = styled.div`
    width: 1080px;
    margin:0 auto;
    
`
export const JoinTitle = styled.h1`
    padding-top:83px;
    text-align: center;
    font-size:24px;
    font-weight: bold;
`
export const Container = styled.div`
    margin:56px auto 100px;
    display:flex;
    justify-content: space-between;
`
export const SubTitle = styled.h4`
    text-align: center;
    padding:46px 0px 31px 0px;
`
export const JoginCard = styled.div`
    padding:40px 110px;
    background-color: white;
    .join-column{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
`
export const IntegratedLogin= styled.div`
    padding: 35px;
    display: flex;
    justify-content: space-between;
    background-color: white;
   
`

export const IntegratedText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: 500;
    line-height: 29px;
`
export const LoginButton = styled.div`
    width: 156px;
    height: 48px;
    background-color: white;
    border:1px solid #d2d2d2;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
`

// EnterpriseSignup.js

export const InfoContainer = styled.div`
    width: 630px;
    padding-top:35px;
    margin:0px auto 100px;
`
export const InfoCard = styled.div`
    padding:44px 32px;
    border-top:2px solid black;
    background-color: white;
    margin-top:33px;
`
export const AgreementText = styled.h3`
    font-weight: bold;
    font-size:18px;
    margin-bottom:28px;
`
export const AgreementCard = styled.div`
    border:1px solid rgba(0,0,0,0.2);
    padding:21px;
`

export const CheckBox = styled.input`
    margin-right:10px;
`
export const CheckLabel = styled.div`
    width: 100%;
    padding-bottom:14px;
    display: flex;
    display:flex;
    label{
       line-height: 20px;;
    }
    .essential{
        color:red;
    }
`
export const Esential= styled.div` 
    margin-top:20px;
    border-bottom:1px solid rgba(0,0,0,0.1);
`

export const Choice = styled.div`
    margin-top:20px;
`
export const CheckBoxWrap = styled.div`
    display:flex;
    align-items: flex-start;
    border-bottom:${(props)=>props.active && '1px solid rgba(0,0,0,0.1)'};
`

export const FormInfo = styled.form`
    margin-top:35px;
    width:100%;
    div{
        label{
            width:180px;
            
            font-size:20px;
            font-weight: bold;
        }
        
        display: flex;
        justify-content: space-between;
    }
`
export const Input = styled.input`
    width: 100%;
    background-color: #f4f4f4;
    border-radius: 5px;
    border:none;
    height:50px;
`
export const InfoWrap = styled.div`
    padding-bottom:20px;
    display: flex;
    align-items: center;
`
export const SignUpBtn = styled.div`
    width: 100%;
    margin-top:30px;
    button{
        margin:0 auto;
        width: 130px;
        height: 50px;
        
        border-radius:5px;
        border:none;
        font-size:15px;
        font-weight: bold;
    }
`
//AuthFooter.js
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
