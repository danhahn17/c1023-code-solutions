/* exported firstChars */

function firstChars(length, string) {
  let newString = '';
  for (let i = 0; i < length; i++) {
    newString += string.charAt(i);
  }
  return newString;
}
