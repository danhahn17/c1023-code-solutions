/* exported reverseWord */

function reverseWord(word) {
  let reversed = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word.charAt(i);
  }
  return reversed;
}
