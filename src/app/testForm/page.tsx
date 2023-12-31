'use client';
import { AuthProvider } from "@/auth/FirebaseContext"
import TestForm from "./page2"
import GuitarAPI from "../../../helpers/guitar_api_functions";

const TestFormWithAuth = () => {

    const dummyGuitar = {
        "year": 2002,
        "brand": "Fender",
        "model": "Stratocaster American Deluxe",
        "num_frets": 22,
        "ss_frets": false,
        "wood": {
            "body": "mahogony",
            "neck": "mahogony",
            "fretboard": "mahogony"
        },
        "locking_tuners": false
    }

    const handleButtonClick = () => {
        GuitarAPI.fetchGuitars()
            .then(result => console.log(result))
            .catch(error => console.error('Error fetching guitars:', error.message));
    };

    const handleAddGuitar = () => {
        GuitarAPI.addGuitar(dummyGuitar)
            .then(result => console.log(result))
            .catch(error => console.error('Error fetching guitars:', error.message));
    }

    return (
        <AuthProvider>
            <TestForm />
            <button onClick={handleButtonClick}>Get all guitars</button>
            <button onClick={handleAddGuitar}>Add a new guitar</button>
        </AuthProvider>);

}

export default TestFormWithAuth