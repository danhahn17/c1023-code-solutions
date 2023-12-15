# Challenge: Find First Non-Repeating Character

This challenge is similar to the last. So if you understood that, you should be able to get this one on your own.

## Instructions

Write a function called `findFirstNonRepeatingCharacter` that takes in a string and returns the first non-repeating character in the string.

If there are no non-repeating characters, the function should return `undefined`.

### Function Signature

```js
/**
 * Returns the first non-repeating character in a string.
 * @param str The string to search.
 * @returns The first non-repeating character in the string or undefined if there are no non-repeating characters.
 */
function findFirstNonRepeatingCharacter(str: string): string | undefined;
```

### Examples

```js
findFirstNonRepeatingCharacter('aabccdeff'); // should return 'b'
findFirstNonRepeatingCharacter('aabbcc'); // should return undefined
findFirstNonRepeatingCharacter('abcdef'); // should return 'a'
```

### Constraints

- The input string will only contain lowercase letters and spaces

### Hints

- You can use an object or a map to keep track of the number of times each character appears in the string.
- You can iterate through the string and check if the current character has only appeared once.

## Solutions

<details>
  <summary>Click For Solution 1</summary>

Using an object:

```js
export function findFirstNonRepeatingCharacter(
  str: string
): string | undefined {
  const charCount: Record<string, number> = {};

  for (const char of str) {
    charCount[char] = (charCount[char] ?? 0) + 1;
  }

  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return undefined;
}
```

### Explanation

- Initialize an empty object to keep track of the number of times each character appears in the string.
- Iterate through the string and add each character to the object. If the character is already in the object, we increment its count by 1. If it isn't, we set its count to 1.
- Iterate through the string again and check the object to see if the current character has a count of 1. If it does, return it because it's the first non-repeating character.
- If we make it through the entire string without returning a character, we return undefined because there are no non-repeating characters.

</details>

<details>
  <summary>Click For Solution 2</summary>

Using a `Map`:

```js
export function findFirstNonRepeatingCharacter(
  str: string
): string | undefined {
  const charCount = new Map();

  for (const char of str) {
    charCount.set(char, (charCount.get(char) ?? 0) + 1);
  }

  for (const char of str) {
    if (charCount.get(char) === 1) {
      return char;
    }
  }

  return undefined;
}
```

### Explanation

- Initialize a map to keep track of the number of times each character appears in the string.

- Iterate through the string and add each character to the map. If the character is already in the map, we increment its count by 1. If it isn't, we set its count to 1.

- Iterate through the string again and check the map to see if the current character has a count of 1. If it does, we return it because it's the first non-repeating character.
- If we make it through the entire string without returning a character, we return undefined because there are no non-repeating characters.

</details>
