import { styled } from "styled-components";

export const FormInfo = styled.form`
    width: 100%;
    margin-top:35px;
    
    div{
        label{
            width:180px;
            
            font-size:20px;
            font-weight: bold;
        }
        
        display: flex;
        justify-content: space-between;
        justify-content: center;
    }
`
export const InfoWrap = styled.div`
    padding-bottom:20px;
    display: flex;
    align-items: center;
`
export const AuthInput = styled.input`
    width: 100%;
    background-color: #f4f4f4;
    border-radius: 5px;
    border:none;
    height:50px;
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
