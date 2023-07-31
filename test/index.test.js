const { breakCamelCase, checkCharUpper } = require('../src/index');

describe('the breakCamelCase canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe('checkCharUpper', () => {
  it('should return true for input equal to "A"', () => {
    expect(checkCharUpper('A')).toBe(true);
  });

  it('should return false for input equal to "a"', () => {
    expect(checkCharUpper('a')).toBe(false);
  });
});

describe('breakCamelCase', () => {
  it('should return "" for input equal to ""', () => {
    expect(breakCamelCase('')).toBe('');
  });

  it('should return "identifier" for input equal to "identifier"', () => {
    expect(breakCamelCase('identifier')).toBe('identifier');
  });

  it('should return "camel Casing" for input equal to "camelCasing"', () => {
    expect(breakCamelCase('camelCasing')).toBe('camel Casing');
  });

  it('should return "this Is A Test" for input equal to "thisIsATest"', () => {
    expect(breakCamelCase('thisIsATest')).toBe('this Is A Test');
  });
});
