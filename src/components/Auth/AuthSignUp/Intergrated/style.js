import { styled } from "styled-components";

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
export const JoinCard = styled.div`
    padding:40px 110px;
    background-color: white;
    .join-column{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
`
export const SubTitle = styled.h4`
    text-align: center;
    padding:46px 0px 31px 0px;
`

export const IntegratedLogin = styled.div`
    padding: 35px;
    display: flex;
    justify-content: space-between;
    background-color: white;
   
`
export const JoinButton = styled.button`
    width:294px;
    height:50px;
    margin-top:40px;
    border:none;
    border-radius: 8px;
    background-color: ${(props) => props.bgColor};
    font-size:18px;
    a{
        color:${(props) => props.color};
    }
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

export const IntegratedText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: 500;
    line-height: 29px;
`