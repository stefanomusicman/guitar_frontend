import LoginForm from "@/components/forms/loginForm";
import GeneralContainer from "@/components/generalContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Login',
    description: 'This page allows users to login to their accounts',
}

const Login = () => {
    return (
        <GeneralContainer>
            <LoginForm />
        </GeneralContainer>
    );
}

export default Login;