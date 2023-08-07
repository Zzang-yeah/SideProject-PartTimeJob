import React from "react";
import { FormInfo } from "./style";

const AuthForm = ({ children, onSubmit }) => {

    return (
        <FormInfo onSubmit={onSubmit}>
            {children}
        </FormInfo>
    )
}

export default AuthForm;