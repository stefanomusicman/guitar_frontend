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

    // CREATE METHOD THAT WILL HANDLE ALL CHECKS AND THROW APPROPRIATE ERRORS
    // ACCEPTANCE CRITERIAS ARE NOT MET
    static handleFormSubmission(): void {

    }
}