// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

test('isPhoneNumbertrue1', () => {
    let phone = '408-888-8888';
    expect(functions.isPhoneNumber(phone)).toBe(true);
})

test('isPhoneNumbertrue2', () => {
    let phone = '408-594-1234';
    expect(functions.isPhoneNumber(phone)).toBe(true);
})

test('isPhoneNumberfalse1', () => {
    let phone = 'we ball';
    expect(functions.isPhoneNumber(phone)).toBe(false);
})

test('isPhoneNumberfalse2', () => {
    let phone = '(408)555-132';
    expect(functions.isPhoneNumber(phone)).toBe(false);
})


