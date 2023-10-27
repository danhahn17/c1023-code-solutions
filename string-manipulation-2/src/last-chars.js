/* exported lastChars */

function lastChars(length, string) {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (string.length > 0 && i > string.length - length - 1) {
      newString += string.charAt(i);
    }
  }
  return newString;
}
