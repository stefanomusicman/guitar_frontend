/*

-- THINGS THAT NEED TO BE VERIFIED IN ORDER FOR FORM SUBMISSION TO BE SUCCESSFUL

    1. Make sure the following Number fields are not equal to 0
        - Num Frets
        - Year
    2. Make sure the following are not equal to ''
        - Stainless Steel Frets
        - Locking Tuners
        - Body
        - Neck
        - Fretboard
    3. Convert String values to boolean values for the following fields
        - Stainless Steel Frets
        - Locking Tuners
*/

import { ErrorType } from "../types/error";
import GuitarAPI from "./guitar_api_functions";

class AddGuitarValidation {
    // VALIDATION OF EMPTY **NUMBER** FIELDS
    static verifyEmptyNumberFields(input: Number): Boolean {
        return input === 0;
    }

    // VALIDATION OF EMPTY FORM **STRING** FIELDS
    static verifyEmptyStringField(input: any): Boolean {
        return String(input).trim().length === 0;
    }

    // CONVERT STRING VALUES TO BOOLEAN VALUES
    static convertStringToBool(input: String): Boolean {
        return input === "True";
    }

    static validateEmptyNumberFields(frets: number, year: number): Boolean {
        try {
            if (isNaN(frets) || isNaN(year)) {
                throw new Error(ErrorType.EMPTY_FORM_FIELDS);
            }
            return true;
        } catch (error: any) {
            console.error('Error validating empty number fields:', error.message);
            return false;
        }
    }

    static validateEmptyStringFields(stainlessFrets: String, lockingTuners: String, body: String, neck: String, fretboard: String): Boolean {
        try {
            if (stainlessFrets.length === 0 || lockingTuners.length === 0 || body.length === 0 || neck.length === 0 || fretboard.length === 0) {
                throw new Error(ErrorType.EMPTY_FORM_FIELDS);
            }
            return true;
        } catch (error: any) {
            return false;
        }
    }

    // CREATE METHOD THAT WILL HANDLE ALL CHECKS AND THROW APPROPRIATE ERRORS
    // ACCEPTANCE CRITERIAS ARE NOT MET
    static async handleFormSubmission(year: number, brand: String, model: String, numFrets: number, ssFrets: String, lockTuners: String, bodyWood: String, neckWood: String, fretWood: String) {
        // Check 1
        this.validateEmptyNumberFields(year, numFrets);
        // Check 2
        this.validateEmptyStringFields(ssFrets, lockTuners, bodyWood, neckWood, fretWood);
        // If all goes well we can complete the information
        let guitar = {
            "year": year,
            "brand": brand,
            "model": model,
            "num_frets": numFrets,
            "ss_frets": this.convertStringToBool(ssFrets),
            "wood": {
                "body": bodyWood,
                "neck": neckWood,
                "fretboard": fretWood
            },
            "locking_tuners": this.convertStringToBool(lockTuners)
        }
        await GuitarAPI.addGuitar(guitar);
    }
}

export default AddGuitarValidation;