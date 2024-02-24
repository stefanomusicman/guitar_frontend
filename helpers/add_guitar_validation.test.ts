import AddGuitarValidation from "./add_guitar_validation"

describe('check number is not 0', () => {
    test('0 equals to true', () => {
        expect(AddGuitarValidation.verifyEmptyNumberFields(0)).toBe(true);
    });

    test('2 equals to false', () => {
        expect(AddGuitarValidation.verifyEmptyNumberFields(2)).toBe(false);
    });
})