const { breakCamelCase } = require('../src/index');

describe('the breakCamelCase canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

test('breakCamelCase', () => {
  expect(breakCamelCase(0)).toBe(true);
});
