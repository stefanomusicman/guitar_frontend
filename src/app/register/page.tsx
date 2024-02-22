import RegisterForm from "@/components/forms/registerForm";
import GeneralContainer from "@/components/generalContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Sign Up',
    description: 'This page allows users to create an account.',
}

const Register = () => {
    return (
        <GeneralContainer>
            <RegisterForm />
        </GeneralContainer>
    );
}

export default Register;