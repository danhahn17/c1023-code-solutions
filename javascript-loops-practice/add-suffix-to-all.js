/* exported addSuffixToAll */

function addSuffixToAll(words, suffix) {
  const suffixWords = [];
  for (let i = 0; i < words.length; i++) {
    suffixWords.push(words[i] + suffix);
  }
  return suffixWords;
}
