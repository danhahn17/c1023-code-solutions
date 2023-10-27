/* exported capitalizeWord */

function capitalizeWord(word) {
  let finalWord = '';
  if (word.toLowerCase() === 'javascript') {
    finalWord =
      word.charAt(0).toUpperCase() +
      word.slice(1, 4).toLowerCase() +
      word.charAt(4).toUpperCase() +
      word.slice(5).toLowerCase();
    return finalWord;
  } else {
    const finalWord =
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    return finalWord;
  }
}
