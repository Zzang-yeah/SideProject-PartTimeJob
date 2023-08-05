import React from "react";
import { Outlet } from "react-router-dom";
import { AuthHeader, LogoImg, TitleContainer } from "./style";
import { Title } from "../commonStyle";

const AuthLayOut = () => {
    return (
        <>
            <AuthHeader>
                <div className="container">
                    <TitleContainer>
                        <LogoImg>LogoImg</LogoImg>
                        <Title>알바몬</Title>
                    </TitleContainer>
                </div>
            </AuthHeader>
            <Outlet />
        </>
    )
}

export default AuthLayOut;