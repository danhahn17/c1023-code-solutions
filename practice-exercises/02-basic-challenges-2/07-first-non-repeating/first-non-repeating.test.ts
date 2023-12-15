import { findFirstNonRepeatingCharacter } from './first-non-repeating';

test('Find First Non-Repeating Character', () => {
  expect(findFirstNonRepeatingCharacter('aabccdeff')).toBe('b');
  expect(findFirstNonRepeatingCharacter('aabbcc')).toBeUndefined();
  expect(findFirstNonRepeatingCharacter('hello world')).toBe('h');
});
