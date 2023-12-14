import { findMissingLetter } from './find-missing-letter';

test('Find Missing Letter', () => {
  expect(findMissingLetter(['a', 'b', 'c', 'e'])).toBe('d');
  expect(findMissingLetter(['X', 'Z'])).toBe('Y');
  expect(findMissingLetter(['m', 'n', 'o', 'q', 'r'])).toBe('p');
  expect(findMissingLetter(['F', 'G', 'H', 'J'])).toBe('I');
});

test('Find no missing letter', () => {
  expect(findMissingLetter(['a', 'b', 'c', 'd'])).toBeUndefined();
});
