/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen() {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

function getEvenNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

function repeatWord(word, times) {
  let count = 1;
  let repeated = '';
  while (count <= times) {
    repeated += word + ' ';
    count++;
  }
  return repeated;
}

function logEachCharacter(string) {
  let i = 0;
  for (i = 0; i < string.length; i++) {
    console.log(string.charAt(i));
  }
}

function doubleAll(numbers) {
  const doubled = [];
  let i = 0;
  for (i = 0; i < numbers.length; i++) {
    const doubledNumber = numbers[i] * 2;
    doubled.push(doubledNumber);
  }
  return doubled;
}

function getKeys(object) {
  const keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}

function getValues(object) {
  const values = [];
  for (const key in object) {
    values.push(object[key]);
  }
  return values;
}
