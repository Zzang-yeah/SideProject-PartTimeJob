import React from "react";
import { AuthWrapper, InfoContainer } from "../../common/commonStyle";
import Agreement from "../../common/Agreement/Agreement";
import AuthForm from "../../common/AuthForm/AuthForm";
import { Title } from "../../common/commonStyle";
import AuthFooter from "../../common/AuthFooter/AuthFooter";



const EnterpriseSignup = () => {

    return (
        <>
            <AuthWrapper>
                <InfoContainer>
                    <Title>개인 회원가입</Title>

                    {/* 약관동의 */}
                    <Agreement />

                    {/* 회원정보 입력 컴포넌트 */}
                    <AuthForm />

                </InfoContainer>
            </AuthWrapper>
            <AuthFooter />
        </>

    )
}

export default EnterpriseSignup;