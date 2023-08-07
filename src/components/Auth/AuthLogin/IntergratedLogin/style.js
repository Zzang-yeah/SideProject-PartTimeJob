import { styled } from "styled-components";

export const IntergratedContainer = styled.div`
    padding-top: 58px;
`
export const Card = styled.div`
    width: 610px;
    margin:0 auto;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:60px 30px;
`
export const IntergratedTitle = styled.h1`
    font-size:24px;
    font-weight: bold;
`
export const ChoiceLogin = styled.div`
    display: flex; 
    flex-direction: column;
    margin-top:50px;
`
export const ChoiceSpan = styled.span`
    display: block;
    background-color: ${props => props.isActive ? '#f8f8f8' : 'white'};
    border-top:1px solid ${(props) => props.isActive ? 'black' : '#e8e8e8'};
    border-left:1px solid ${(props) => props.isActive ? 'black' : '#e8e8e8'};
    border-right:1px solid ${(props) => props.isActive ? 'black' : '#e8e8e8'};
    border-bottom:1px solid ${(props) => props.isActive ? '#e8e8e8' : 'black'};
    width: 200px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
