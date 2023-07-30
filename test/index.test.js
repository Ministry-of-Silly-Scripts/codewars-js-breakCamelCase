const { breakCamelCase } = require('../src/index');

describe('the breakCamelCase canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe('breakCamelCase', () => {
  it('should return "" for input equal to ""', () => {
    expect(breakCamelCase('')).toBe('');
  });
});
