const checkCharUpper = (char) => {
  return char === char.toUpperCase();
};

const breakCamelCase = (string) => {
  return string
    .split('')
    .map((s) => {
      if (checkCharUpper(s)) {
        return ` ${s}`;
      }
      return s;
    })
    .join('');
};

module.exports = {
  checkCharUpper,
  breakCamelCase,
};
