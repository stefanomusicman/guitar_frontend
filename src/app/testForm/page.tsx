'use client';
import { AuthProvider } from "@/auth/FirebaseContext"
import TestForm from "./page2"
import GuitarAPI from "../../../helpers/guitar_api_functions";
import { useState } from "react";

const TestFormWithAuth = () => {
    const dummyGuitar = {
        // "year": 2002,
        "brand": "Fender",
        // "model": "Stratocaster American Deluxe",
    }

    const handleButtonClick = () => {
        GuitarAPI.fetchGuitars()
            .then(result => console.log(result))
            .catch(error => console.error('Error fetching guitars:', error.message));
    };

    const handleSearchByBrand = () => {
        GuitarAPI.searchByBrand('Music Man')
            .then(result => console.log(result))
            .catch(error => console.error('Error fetching guitars:', error.message));
    }

    return (
        <AuthProvider>
            <TestForm />
            <button onClick={handleButtonClick}>Get all guitars</button>
            <button onClick={handleSearchByBrand}>Search by brand</button>
        </AuthProvider>);

}

export default TestFormWithAuth