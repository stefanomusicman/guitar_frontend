import { AuthProvider } from "@/auth/FirebaseContext"
import TestForm from "./page2"

const TestFormWithAuth = () => {

    return (
        <AuthProvider>
            <TestForm />
        </AuthProvider>);

}

export default TestFormWithAuth