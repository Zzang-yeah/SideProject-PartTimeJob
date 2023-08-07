import React from "react";
import { LoginInput } from "./style";


const AuthLoginInput = ({ type, register, placeholder }) => {
    return (
        <LoginInput
            type={type}
            {...register}
            placeholder={placeholder}
        />
    )
}
export default AuthLoginInput;