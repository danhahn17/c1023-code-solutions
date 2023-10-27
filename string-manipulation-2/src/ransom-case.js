/* exported ransomCase */

function ransomCase(string) {
  let ransomWord = '';
  const newString = string.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      ransomWord += newString.charAt(i);
    } else if (i % 2 === 1) {
      ransomWord += newString.charAt(i).toUpperCase();
    }
  }
  return ransomWord;
}
