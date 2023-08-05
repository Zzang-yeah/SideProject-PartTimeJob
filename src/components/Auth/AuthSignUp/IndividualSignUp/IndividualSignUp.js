import React from "react";
import { AgreementText, AuthWrapper, InfoCard, InfoContainer, Title } from "../../style/style";


const IndividualSignUp = () => {
    return (
        <>
            <AuthWrapper>
                <InfoContainer>
                    <Title>기업 회원가입</Title>
                    <InfoCard>
                        <AgreementText>약관동의</AgreementText>

                    </InfoCard>
                </InfoContainer>
            </AuthWrapper>
        </>
    )
}

export default IndividualSignUp;