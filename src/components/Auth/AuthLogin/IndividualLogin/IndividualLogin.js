import React from "react";
import AuthForm from "../../common/AuthForm/AuthForm";
import AuthLoginInput from "../../common/AuthLoginInput/AuthLoginInput";
import { Container } from "./style";
import { LoginBtn, LoginColumn, SignupLogin } from "../../common/commonStyle";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginPost } from "../../../../api/loginPost";


const IndividualLogin = () => {
    const { register, handleSubmit } = useForm();

    const onLoginHandler = async (data) => {
        loginPost(
            process.env.REACT_APP_API_LOGIN,
            data,
            '/'

        )
    }
    return (
        <>
            <AuthForm onSubmit={handleSubmit(onLoginHandler)}>
                <LoginColumn>
                    <AuthLoginInput
                        tpye='email'
                        placeholder='이메일'
                        register={register('email')}
                    />
                    <AuthLoginInput
                        type='password'
                        placeholder='비밀번호'
                        register={register('password')}
                    />
                    <LoginBtn>로그인</LoginBtn>
                </LoginColumn>
            </AuthForm>
            <SignupLogin>
                <Link to='/auth/signup'>계정이 없으신가요?</Link>
            </SignupLogin>
        </>


    )
}

export default IndividualLogin;