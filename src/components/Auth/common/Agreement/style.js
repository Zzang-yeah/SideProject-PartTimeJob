import { styled } from "styled-components";

export const AgreementCard = styled.div`
    border:1px solid rgba(0,0,0,0.2);
    padding:21px;
`
export const InfoCard = styled.div`
    padding:44px 32px;
    border-top:2px solid black;
    background-color: white;
    margin-top:33px;
`
export const CheckBoxWrap = styled.div`
    display:flex;
    align-items: flex-start;
    border-bottom:${(props) => props.active && '1px solid rgba(0,0,0,0.1)'};
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
export const Esential = styled.div` 
    margin-top:20px;
    border-bottom:1px solid rgba(0,0,0,0.1);
`

export const Choice = styled.div`
    margin-top:20px;
`

export const AgreementText = styled.h3`
    font-weight: bold;
    font-size:18px;
    margin-bottom:28px;
`