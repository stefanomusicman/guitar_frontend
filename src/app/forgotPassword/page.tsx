import ForgotPasswordForm from "@/components/forms/forgotPasswordForm"
import GeneralContainer from "@/components/generalContainer"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Forgot Password',
    description: 'This page allows users to carry a process to recover their passwords',
}

const ForgotPassword = () => {
    return (
        <GeneralContainer>
            <ForgotPasswordForm />
        </GeneralContainer>
    )
}

export default ForgotPassword;