import { add } from './add.js';
import { subtract } from './subtract.js';
import { multiply } from './multiply.js';
import { divide } from './divide.js';

const mathOperation = process.argv[3];
const firstNumber = process.argv[2];
const secondNumber = process.argv[4];

if (mathOperation === 'plus') {
  console.log(
    'result:',
    add(parseFloat(firstNumber), parseFloat(secondNumber))
  );
} else if (mathOperation === 'minus') {
  console.log(
    'result:',
    subtract(parseFloat(firstNumber), parseFloat(secondNumber))
  );
} else if (mathOperation === 'times') {
  console.log(
    'result:',
    multiply(parseFloat(firstNumber), parseFloat(secondNumber))
  );
} else if (mathOperation === 'over') {
  console.log(
    'result:',
    divide(parseFloat(firstNumber), parseFloat(secondNumber))
  );
}
