import { createBrowserRouter } from "react-router-dom";
import AuthLayOut from "../components/Auth/components/common/AuthLayOut";
import EnterpriseSignup from "../components/Auth/AuthSignUp/Enterprise/EnterpriseSignUp";
import AuthSignUp from "../components/Auth/AuthSignUp/AuthSignUp";

export const router = createBrowserRouter([
    {
        path:'/',
    },
    {
        // 회원가입, 로그인 
        path:'/auth',
        element:<AuthLayOut/>,
        children:[
            {path:'signup', element:<AuthSignUp/>},
            {path:'signup-enterprise', element:<EnterpriseSignup/>}
        ]
    }
])