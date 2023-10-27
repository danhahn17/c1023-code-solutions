/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  let string1 = '';
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      string1 += string.charAt(secondIndex);
    } else if (i === secondIndex) {
      string1 += string.charAt(firstIndex);
    } else if (i !== firstIndex && i !== secondIndex) {
      string1 += string.charAt(i);
    }
  }
  return string1;
}
