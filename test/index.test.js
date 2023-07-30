const { breakCamelCase } = require('../src/index');

test('breakCamelCase', () => {
  expect(breakCamelCase(0)).toBe(true);
});
