/* exported numVowels */

function numVowels(string) {
  const lowerString = string.toLowerCase();
  let vowelCount = 0;
  for (let i = 0; i < string.length; i++) {
    if (
      lowerString.charAt(i) === 'a' ||
      lowerString.charAt(i) === 'e' ||
      lowerString.charAt(i) === 'i' ||
      lowerString.charAt(i) === 'o' ||
      lowerString.charAt(i) === 'u'
    ) {
      vowelCount += 1;
    }
  }
  return vowelCount;
}
