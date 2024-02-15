/*

-- THINGS THAT NEED TO BE VERIFIED IN ORDER FOR FORM SUBMISSION TO BE SUCCESSFUL

    1. ALL FIELDS MUST BE FILLED....NO EMPTY FIELDS
    2. YEAR MUST BE A NUMBER
    3. YEAR MUST BE A NUMBER AFTER 1920

*/

class AddGuitarValidation {
    // VALIDATION OF EMPTY FORM FIELDS
    static verifyEmptyFormField(input: any): Boolean {
        return String(input).trim().length === 0;
    }

    // VALIDATION OF 
}