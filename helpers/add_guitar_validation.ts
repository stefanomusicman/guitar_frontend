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

    static validateEmptyNumberFields(frets: Number, year: Number): Boolean {
        if (frets === 0 || year === 0) {
            return false;
        }
        return true;
    }

    static validateEmptyStringFields(stainlessFrets: String, lockingTuners: String, body: String, neck: String, fretboard: String): Boolean {
        if (stainlessFrets.length === 0 || lockingTuners.length === 0 || body.length === 0 || neck.length === 0 || fretboard.length === 0) {
            return false;
        }
        return true;
    }

    // CREATE METHOD THAT WILL HANDLE ALL CHECKS AND THROW APPROPRIATE ERRORS
    // ACCEPTANCE CRITERIAS ARE NOT MET
    static async handleFormSubmission(year: Number, brand: String, model: String, numFrets: Number, ssFrets: String, lockTuners: String, bodyWood: String, neckWood: String, fretWood: String): Promise<void> {
        try {
            const numFieldsValid = await this.validateEmptyNumberFields(year, numFrets);
            const strFieldsValid = await this.validateEmptyStringFields(ssFrets, lockTuners, bodyWood, neckWood, fretWood);

            if (!numFieldsValid || !strFieldsValid) {
                throw new Error(ErrorType.EMPTY_FORM_FIELDS);
            }

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
        } catch (error: any) {
            // Rethrow the error so it can be caught by the calling function
            throw error;
        }
    }

}

export default AddGuitarValidation;