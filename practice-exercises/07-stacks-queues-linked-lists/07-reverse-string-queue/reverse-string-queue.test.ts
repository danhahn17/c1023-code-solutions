import { reverseStringWithQueue } from './reverse-string-queue';

test('Reversing a string', () => {
  expect(reverseStringWithQueue('Hello')).toBe('olleH');
  expect(reverseStringWithQueue('JavaScript')).toBe('tpircSavaJ');
  expect(reverseStringWithQueue('12345')).toBe('54321');
});
