import React from "react";
import { Outlet } from "react-router-dom";
import { AuthHeader, LogoImg, Title, TitleContainer } from "../../style/style";

const AuthLayOut = ()=>{
    return(
        <>
            <AuthHeader>
                <div className="container">
                    <TitleContainer>
                        <LogoImg>LogoImg</LogoImg>
                        <Title>알바몬</Title>
                    </TitleContainer>
                </div>
            </AuthHeader>
            <Outlet/>
        </>
    )
}

export default AuthLayOut;