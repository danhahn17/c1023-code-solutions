/* exported countdown */

function countdown(number) {
  const decreasedNumbers = [];
  while (number >= 0) {
    decreasedNumbers.push(number);
    number--;
  }
  return decreasedNumbers;
}
