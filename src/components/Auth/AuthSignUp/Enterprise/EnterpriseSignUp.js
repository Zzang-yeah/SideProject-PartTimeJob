import React from "react";
import { CheckBoxWrap, AgreementText, AuthWrapper,  InfoCard, InfoContainer, Title } from "../../style/style";
import AuthFooter from "../../components/common/AuthFooter";
import AuthForm from "../../components/common/AuthForm";
import Agreement from "../../components/common/Agreement";


const EnterpriseSignup = ()=>{
    
    return(
        <>
        <AuthWrapper>
            <InfoContainer>
               <Title>개인 회원가입</Title>
               <InfoCard>
                    <AgreementText>약관동의</AgreementText>
                    {/* 약관동의 */}
                    <Agreement/>

                    {/* 회원정보 입력 컴포넌트 */}
                    <AuthForm/>
               </InfoCard>
            </InfoContainer>
        </AuthWrapper>
        <AuthFooter/>
        </>
        
    )
}

export default EnterpriseSignup;