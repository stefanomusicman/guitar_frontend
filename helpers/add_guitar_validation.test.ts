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

// Test for validateEmptyStringFields function
describe('check for any empty fields that expect a string', () => {
    test('first arg is an empty string and equals to false', () => {
        expect(AddGuitarValidation.validateEmptyStringFields('', 'hello', 'hello', 'hello', 'hello')).toBe(false);
    });

    test('second arg is an empty string and equals to false', () => {
        expect(AddGuitarValidation.validateEmptyStringFields('hello', '', 'hello', 'hello', 'hello')).toBe(false);
    });

    test('third arg is an empty string and equals to false', () => {
        expect(AddGuitarValidation.validateEmptyStringFields('hello', 'hello', '', 'hello', 'hello')).toBe(false);
    });

    test('fourth arg is an empty string and equals to false', () => {
        expect(AddGuitarValidation.validateEmptyStringFields('hello', 'hello', 'hello', '', 'hello')).toBe(false);
    });

    test('fifth arg is an empty string and equals to false', () => {
        expect(AddGuitarValidation.validateEmptyStringFields('hello', 'hello', 'hello', 'hello', '')).toBe(false);
    });

    test('all string are non empty values and equals to true', () => {
        expect(AddGuitarValidation.validateEmptyStringFields('hello', 'hello', 'hello', 'hello', 'hello')).toBe(true);
    });
});

// Test for handleFormSubmission function
// order of args: Number, String, String, Number, STring, String, String, String, String
describe('validate all input fields in order to carry out a successful POST request', () => {
    test('all empty fields throws an error', async () => {
        try {
            // Call the async function and await its result
            await AddGuitarValidation.handleFormSubmission(0, '', '', 0, '', '', '', '', '');

            // If the function does not throw an error as expected, fail the test
            fail('Expected function to throw an error but it did not');
        } catch (error) {
            // If the function throws an error as expected, the test passes
            expect(error).toBeDefined();
        }
    });

    describe('check for empty number fields', () => {
        test('empty year throws an error', async () => {
            try {
                // Call the async function and await its result
                await AddGuitarValidation.handleFormSubmission(0, 'hello', 'hello', 22, 'True', 'True', 'hello', 'hello', 'hello');

                // If the function does not throw an error as expected, fail the test
                fail('Expected function to throw an error but it did not');
            } catch (error) {
                // If the function throws an error as expected, the test passes
                expect(error).toBeDefined();
            }
        });

        test('empty frets throws an error', async () => {
            try {
                // Call the async function and await its result
                await AddGuitarValidation.handleFormSubmission(2000, 'hello', 'hello', 0, 'True', 'True', 'hello', 'hello', 'hello');

                // If the function does not throw an error as expected, fail the test
                fail('Expected function to throw an error but it did not');
            } catch (error) {
                // If the function throws an error as expected, the test passes
                expect(error).toBeDefined();
            }
        });
    });

    describe('check for empty string fields', () => {
        test('empty brand throws an error', async () => {
            try {
                // Call the async function and await its result
                await AddGuitarValidation.handleFormSubmission(2000, '', 'hello', 22, 'True', 'True', 'hello', 'hello', 'hello');

                // If the function does not throw an error as expected, fail the test
                fail('Expected function to throw an error but it did not');
            } catch (error) {
                // If the function throws an error as expected, the test passes
                expect(error).toBeDefined();
            }
        });

        test('empty model throws an error', async () => {
            try {
                // Call the async function and await its result
                await AddGuitarValidation.handleFormSubmission(2000, 'hello', '', 22, 'True', 'True', 'hello', 'hello', 'hello');

                // If the function does not throw an error as expected, fail the test
                fail('Expected function to throw an error but it did not');
            } catch (error) {
                // If the function throws an error as expected, the test passes
                expect(error).toBeDefined();
            }
        });

        test('empty ssFrets throws an error', async () => {
            try {
                // Call the async function and await its result
                await AddGuitarValidation.handleFormSubmission(2000, 'hello', 'hello', 22, '', 'True', 'hello', 'hello', 'hello');

                // If the function does not throw an error as expected, fail the test
                fail('Expected function to throw an error but it did not');
            } catch (error) {
                // If the function throws an error as expected, the test passes
                expect(error).toBeDefined();
            }
        });

        test('empty lock tuners throws an error', async () => {
            try {
                // Call the async function and await its result
                await AddGuitarValidation.handleFormSubmission(2000, 'hello', 'hello', 22, 'True', '', 'hello', 'hello', 'hello');

                // If the function does not throw an error as expected, fail the test
                fail('Expected function to throw an error but it did not');
            } catch (error) {
                // If the function throws an error as expected, the test passes
                expect(error).toBeDefined();
            }
        });

        test('empty bodyWood throws an error', async () => {
            try {
                // Call the async function and await its result
                await AddGuitarValidation.handleFormSubmission(2000, 'hello', 'hello', 22, 'True', 'hello', '', 'hello', 'hello');

                // If the function does not throw an error as expected, fail the test
                fail('Expected function to throw an error but it did not');
            } catch (error) {
                // If the function throws an error as expected, the test passes
                expect(error).toBeDefined();
            }
        });

        test('empty neckWood throws an error', async () => {
            try {
                // Call the async function and await its result
                await AddGuitarValidation.handleFormSubmission(2000, 'hello', 'hello', 22, 'True', 'hello', 'hello', '', 'hello');

                // If the function does not throw an error as expected, fail the test
                fail('Expected function to throw an error but it did not');
            } catch (error) {
                // If the function throws an error as expected, the test passes
                expect(error).toBeDefined();
            }
        });

        test('empty fretWood throws an error', async () => {
            try {
                // Call the async function and await its result
                await AddGuitarValidation.handleFormSubmission(2000, 'hello', 'hello', 22, 'True', 'hello', 'hello', 'hello', '');

                // If the function does not throw an error as expected, fail the test
                fail('Expected function to throw an error but it did not');
            } catch (error) {
                // If the function throws an error as expected, the test passes
                expect(error).toBeDefined();
            }
        });
    });
});