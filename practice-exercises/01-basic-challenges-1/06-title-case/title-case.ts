import { findFirstNonRepeatingCharacter } from '../../02-basic-challenges-2/07-first-non-repeating/first-non-repeating';

export function titleCase(str: string): string {
  const lowerString = str.toLowerCase();
  const lowerArray = lowerString.split(' ');
  for (let i = 0; i < lowerArray.length; i++) {
    lowerArray[i] =
      lowerArray[i].charAt(0).toUpperCase() + lowerArray[i].slice(1);
  }
  return lowerArray.join(' ');
}
