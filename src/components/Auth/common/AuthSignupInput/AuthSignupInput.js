import React from "react";
import { SignInput } from "./style";

const AuthSignupInput = ({ type, placeholder, register }) => {
    return (
        <SignInput
            type={type}
            placeholder={placeholder}
            {...register}
        />
    )
}

export default AuthSignupInput;