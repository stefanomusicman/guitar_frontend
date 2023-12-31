'use client';
import { AuthProvider } from "@/auth/FirebaseContext"
import TestForm from "./page2"
import GuitarAPI from "../../../helpers/guitar_api_functions";

const TestFormWithAuth = () => {

    const handleButtonClick = () => {
        GuitarAPI.fetchGuitars()
            .then(result => console.log(result))
            .catch(error => console.error('Error fetching guitars:', error.message));
    };

    return (
        <AuthProvider>
            <TestForm />
            <button onClick={handleButtonClick}>Get all guitars</button>
        </AuthProvider>);

}

export default TestFormWithAuth