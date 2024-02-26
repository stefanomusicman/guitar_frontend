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
});

// Test for convertStringToBool function
describe('convert True or False to boolean value', () => {
    test('convert string True to true', () => {
        expect(AddGuitarValidation.convertStringToBool('True')).toBe(true);
    });

    test('convert string False to false', () => {
        expect(AddGuitarValidation.convertStringToBool('False')).toBe(false);
    });
});

// Test for validateEmptyNumberFields function
describe('validate whether or not field is empty (0)', () => {
    test('first arg is 0 and equals to false', () => {
        expect(AddGuitarValidation.validateEmptyNumberFields(0, 22)).toBe(false);
    });

    test('second arg is 0 and equals to false', () => {
        expect(AddGuitarValidation.validateEmptyNumberFields(22, 0)).toBe(false);
    });

    test('both args are 0 and equals to false', () => {
        expect(AddGuitarValidation.validateEmptyNumberFields(0, 0)).toBe(false);
    });

    test('both args are not 0 and equals to true', () => {
        expect(AddGuitarValidation.validateEmptyNumberFields(2000, 22)).toBe(true);
    });
});