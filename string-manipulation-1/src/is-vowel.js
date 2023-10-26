/* exported isVowel */

function isVowel(char) {
  const lowerCased = char.toLowerCase();
  switch (lowerCased) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return true;
    default:
      return false;
  }
}
