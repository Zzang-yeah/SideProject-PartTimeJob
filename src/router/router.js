import { createBrowserRouter } from "react-router-dom";
import EnterpriseSignup from "../components/Auth/AuthSignUp/Enterprise/EnterpriseSignUp";
import AuthSignUp from "../components/Auth/AuthSignUp/Intergrated/AuthSignUp";
import AuthLayOut from "../components/Auth/common/LayOut/AuthLayOut";
import IndividualSignUp from "../components/Auth/AuthSignUp/IndividualSignUp/IndividualSignUp";
import IntergratedLogin from "../components/Auth/AuthLogin/IntergratedLogin/IntergratedLogin";

export const router = createBrowserRouter([
    {
        path: '/',
    },
    {
        // 회원가입, 로그인 
        path: '/auth',
        element: <AuthLayOut />,
        children: [
            { path: 'signup', element: <AuthSignUp /> },
            { path: 'signup-enterprise', element: <EnterpriseSignup /> },
            { path: 'signup-individual', element: <IndividualSignUp /> },
            { path: 'login', element: <IntergratedLogin /> },
        ]
    }
])