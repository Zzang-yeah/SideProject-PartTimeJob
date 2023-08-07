import React from "react";
import { AccountBtn, AuthWrapper, InfoContainer } from "../../common/commonStyle";
import Agreement from "../../common/Agreement/Agreement";
import AuthForm from "../../common/AuthForm/AuthForm";
import { Title } from "../../common/commonStyle";
import AuthFooter from "../../common/AuthFooter/AuthFooter";
import { InfoCard } from "../../common/Agreement/style";
import { InfoWrap } from "../../common/AuthForm/style";
import AuthSignupInput from "../../common/AuthSignupInput/AuthSignupInput";
import { useForm } from "react-hook-form";



const EnterpriseSignup = () => {
    const { register, handleSubmit } = useForm();

    const individualSignup = async (data) => {
        console.log('data', data)
        try {
            const response = await fetch('https://7e23-118-32-224-80.ngrok-free.app/members', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            const responseData = await response.json();
            if (response.status === 200) {
                console.log('resData', responseData);
                return responseData;
            } else if (!response.ok) {
                console.log('!response', responseData);
                return responseData;
            }
        } catch (error) {
            console.log('catch error', error)
        }

    }
    return (
        <>
            <AuthWrapper>
                <InfoContainer>
                    <Title>기업 회원가입</Title>

                    <InfoCard>

                        {/* 약관동의 */}
                        <Agreement />

                        {/* 회원정보 입력 컴포넌트 */}
                        <AuthForm>
                            <InfoWrap>
                                <label>이메일</label>
                                <AuthSignupInput
                                    type='email'
                                    placeholder='이메일'
                                    register={register('email')}
                                />
                            </InfoWrap>
                            <InfoWrap>
                                <label>이름</label>
                                <AuthSignupInput
                                    type='text'
                                    placeholder='이름'
                                    register={register('userName')}
                                />
                            </InfoWrap>
                            <InfoWrap>
                                <label>비밀번호</label>
                                <AuthSignupInput
                                    type='password'
                                    placeholder='비밀번호'
                                    register={register('password')}
                                />
                            </InfoWrap>
                            <div>
                                <AccountBtn>가입하기</AccountBtn>
                            </div>
                        </AuthForm>

                    </InfoCard>

                </InfoContainer>
            </AuthWrapper>
            <AuthFooter />
        </>

    )
}

export default EnterpriseSignup;