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

test('isEmailtrue1', () => {
    let email = 'emailaddress@yahoo.com';
    expect(functions.isEmail(email)).toBe(true);
})

test('isEmailtrue2', () => {
    let email = 's@gmail.com';
    expect(functions.isEmail(email)).toBe(true);
})

test('isEmailfalse1', () => {
    let email = 'gmail.com';
    expect(functions.isEmail(email)).toBe(false);
})

test('isEmailtrue2', () => {
    let email = 's@';
    expect(functions.isEmail(email)).toBe(false);
})

test('strongPassTrue1', () => {
    let pass = 'Chumhead';
    expect(functions.isStrongPassword(pass)).toBe(true);
})

test('strongPassTrue2', () => {
    let pass = 'C541258684amb';
    expect(functions.isStrongPassword(pass)).toBe(true);
})

test('strongPassFalse1', () => {
    let pass = '123';
    expect(functions.isStrongPassword(pass)).toBe(false);
})

test('strongPassFalse2', () => {
    let pass = 'a';
    expect(functions.isStrongPassword(pass)).toBe(false);
})
