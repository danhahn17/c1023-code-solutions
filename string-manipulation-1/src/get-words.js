/* exported getWords */

function getWords(string) {
  if (string === '') {
    return [];
  } else {
    const wordList = string.split(' ');
    return wordList;
  }
}
