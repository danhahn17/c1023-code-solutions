function getRangeReport(start, end) {
  const newInput = {};

  // total
  let sumOfAll = 0;
  for (let i = start; i <= end; i++) {
    sumOfAll += i;
  }
  newInput.total = sumOfAll;

  // odds
  const oddNumbers = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      oddNumbers.push(i);
    }
  }
  newInput.odds = oddNumbers;

  // evens
  const evenNumbers = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  newInput.evens = evenNumbers;

  // range
  const allNumbers = [];
  for (let i = start; i <= end; i++) {
    allNumbers.push(i);
  }
  newInput.range = allNumbers;

  // average
  let averageSum = 0;
  for (let i = start; i <= end; i++) {
    averageSum += i;
  }
  const averageOfNumbers = averageSum / (end - start + 1);
  newInput.average = averageOfNumbers;

  return newInput;
}

console.log(getRangeReport());
