import React from "react";
import { useForm } from "react-hook-form";
import { AuthInput, FormInfo, InfoWrap, SignUpBtn } from "./style";

const AuthForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        console.log(data)
        try {
            const response = await fetch(process.env.RACT_APP_API_MEMBER, {
                method: "POST",
                headers: {  // Modify here
                    'Content-Type': "application/json",

                },
                credentials: "include", //Cross-Origin 요청을 할 때 요청에 자동으로 쿠키와 인증 헤더를 포함하도록 설정하는 역할
                body: JSON.stringify(data),
            })
            const responseData = await response.json(); // Add await here
            if (response.ok) {
                console.log('sucess')
                console.log('data', responseData);
                return responseData;
            } else if (!response.ok) {
                console.log('!response ok')
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <FormInfo onSubmit={handleSubmit(onSubmit)}>
            <InfoWrap>
                <label>이메일</label>
                <AuthInput
                    type='email'
                    {...register('email')}
                />
            </InfoWrap>
            <InfoWrap>
                <label>이름</label>
                <AuthInput
                    type='text'
                    {...register('userName')}
                />
            </InfoWrap>
            {/* <InfoWrap>
                <label>닉네임</label>
                    <AuthInput type='text'/>
                </InfoWrap> */}
            <InfoWrap>
                <label>비밀번호</label>
                <AuthInput
                    type='password'
                    {...register('password')}
                />
            </InfoWrap>
            {/* <InfoWrap>
                        <label>비밀번호확인</label>
                        <AuthInput type='password'/>
                    </InfoWrap> */}
            <SignUpBtn>
                <button>가입하기</button>
            </SignUpBtn>
        </FormInfo>
    )
}

export default AuthForm;