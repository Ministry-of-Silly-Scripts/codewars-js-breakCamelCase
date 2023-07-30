const checkCharUpper = (char) => {
  return char === char.toUpperCase();
};

const breakCamelCase = (string) => {
  let finalWord = '';

  for (let i = 0; i < string.length; i += 1) {
    if (checkCharUpper(string[i])) {
      finalWord += ' ';
    }

    finalWord += string[i];
  }

  return finalWord;
};

module.exports = {
  checkCharUpper,
  breakCamelCase,
};
