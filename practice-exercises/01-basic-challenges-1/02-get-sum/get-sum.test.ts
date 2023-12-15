import { getSum } from './get-sum';

test('Calculating the sum of two numbers', () => {
  // Arrange
  const num1 = 5;
  const num2 = 7;

  // Act
  const result = getSum(num1, num2);

  // Assert
  expect(result).toBe(12);
});
