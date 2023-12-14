export function calculator(
  num1: number,
  num2: number,
  operator: string
): number {
  let result: number;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      throw new Error('Invalid Operator');
  }
  return result;
}
