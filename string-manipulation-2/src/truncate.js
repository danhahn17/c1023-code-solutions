/* exported truncate */

function truncate(length, string) {
  let newWord = '';
  for (let i = 0; i < length; i++) {
    newWord += string.charAt(i);
  }
  return newWord + '...';
}
