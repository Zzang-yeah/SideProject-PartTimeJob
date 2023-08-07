import React, { useState } from "react";
import { AuthWrapper } from "../../common/commonStyle";
import { Card, ChoiceLogin, ChoiceSpan, IntergratedContainer, IntergratedTitle } from "./style";
import IndividualLogin from "../IndividualLogin/IndividualLogin";
import EnterpriseLogin from "../EnterpriseLogin/EnterpriseLogin";
import AuthFooter from "../../common/AuthFooter/AuthFooter";

const IntergratedLogin = () => {
    const [choiceLogin, setChoiceLogin] = useState('individual');

    // 개인,기업 로그인 선택, default -> individual.js (개인로그인)
    const onLoginChoicClick = (type) => {
        setChoiceLogin(type);
    }

    return (
        <>
            <AuthWrapper>
                <IntergratedContainer>
                    <Card>
                        <IntergratedTitle>알바몬 X 잡코리아</IntergratedTitle>
                        <ChoiceLogin>
                            <div style={{ display: 'flex' }}>
                                <ChoiceSpan onClick={() => onLoginChoicClick('individual')} isActive={choiceLogin === 'individual'}>개인 로그인</ChoiceSpan >
                                <ChoiceSpan onClick={() => onLoginChoicClick('enterprise')} isActive={choiceLogin === 'enterprise'}>기업 로그인</ChoiceSpan >
                            </div>

                            {
                                // 개인로그인
                                choiceLogin === 'individual' && <IndividualLogin />
                            }
                            {
                                // 기업로그인
                                choiceLogin === 'enterprise' && <EnterpriseLogin />
                            }
                        </ChoiceLogin>

                    </Card>

                </IntergratedContainer>
            </AuthWrapper>
            <AuthFooter />
        </>
    )
}


export default IntergratedLogin;