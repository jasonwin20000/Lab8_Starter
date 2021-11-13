// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

test('phone number #1', () => {
    expect(functions.isPhoneNumber('408-643-5550')).toBe(true);
});
test('phone number #2', () => {
    expect(functions.isPhoneNumber('669-123-4567')).toBe(true);
});
test('fake phone number', () => {
    expect(functions.isPhoneNumber('21212121212122122')).toBe(false);
});
test('an email is not a phone number', () => {
    expect(functions.isPhoneNumber('jasonwin2000@gmail.com')).toBe(false);
});

test('my email', () => {
    expect(functions.isEmail('jasonwin2000@gmail.com')).toBe(true);
});
test('my email #2', () => {
    expect(functions.isEmail('jwin@ucsd.edu')).toBe(true);
});
test('fake email', () => {
    expect(functions.isEmail('slahdaslsadkjh@whoopdy')).toBe(false);
});
test('a phone number is not an email', () => {
    expect(functions.isEmail('408-643-5550')).toBe(false);
});

test('strong password #1', () => {
    expect(functions.isStrongPassword('VeryStrong21')).toBe(true);
});
test('strong password #2', () => {
    expect(functions.isStrongPassword('SuperDuper_PW')).toBe(true);
});
test('not strong password #1', () => {
    expect(functions.isStrongPassword('VeryStrong21asdhksdajfhglkadjsflkjaddsafasdfasdsad')).toBe(false);
});
test('not strong password #2', () => {
    expect(functions.isStrongPassword('sdjfkdjs@a;.')).toBe(false);
});

test('date #1', () => {
    expect(functions.isDate('12/23/2000')).toBe(true);
});
test('date #2', () => {
    expect(functions.isDate('1/3/2021')).toBe(true);
});
test('bad date #1', () => {
    expect(functions.isDate('12/23/00')).toBe(false);
});
test('date #2', () => {
    expect(functions.isDate('12-23-00')).toBe(false);
});

test('color #1', () => {
    expect(functions.isHexColor('FFF')).toBe(true);
});
test('color #2', () => {
    expect(functions.isHexColor('ABC')).toBe(true);
});
test('fake color #1', () => {
    expect(functions.isHexColor('A')).toBe(false);
});
test('fake color #2', () => {
    expect(functions.isHexColor('aslkdjlkasjd')).toBe(false);
});

