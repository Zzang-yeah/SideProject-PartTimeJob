import { createBrowserRouter } from "react-router-dom";
import AuthSignUp from "../components/Auth/AuthSignUp/AuthSignUp";
import AuthLayOut from "../components/Auth/components/common/AuthLayOut";

export const router = createBrowserRouter([
    {
        path:'/',
    },
    {
        // 회원가입, 로그인 
        path:'/auth',
        element:<AuthLayOut/>,
        children:[
            {path:'signup', element:<AuthSignUp/>}
        ]
    }
])