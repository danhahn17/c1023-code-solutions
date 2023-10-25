/* exported filterOutStrings */

function filterOutStrings(values) {
  const numbersOnly = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      numbersOnly.push(values[i]);
    }
  }
  return numbersOnly;
}
