import AddGuitarValidation from "./add_guitar_validation"

// Tests for verifyEmptyNumberFields function
describe('check number is not 0', () => {
    test('0 equals to true', () => {
        expect(AddGuitarValidation.verifyEmptyNumberFields(0)).toBe(true);
    });

    test('2 equals to false', () => {
        expect(AddGuitarValidation.verifyEmptyNumberFields(2)).toBe(false);
    });
});

// Test for verifyEmptyStringField function
describe('check that string is not empty', () => {
    test('empty string equals to true', () => {
        expect(AddGuitarValidation.verifyEmptyStringField('')).toBe(true);
    });

    test('empty string with white space equals to true', () => {
        expect(AddGuitarValidation.verifyEmptyStringField('  ')).toBe(true);
    });

    test('not empty string equals to false', () => {
        expect(AddGuitarValidation.verifyEmptyStringField('hello')).toBe(false);
    });
})