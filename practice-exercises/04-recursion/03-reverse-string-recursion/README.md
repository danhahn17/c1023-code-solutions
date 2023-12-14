# Challenge: Reverse String Recursion

## Instructions

Write a function called `reverseString` that takes in a string and returns the reversed version of the string. Be sure to use recursion in your solution.

### Function Signature

```js
/**
 * Returns the reverse of a string.
 * @param str The string to reverse.
 * @returns The reverse of the string.
 */
function reverseString(str: string): string;
```

## Examples

```js
reverseString('hello'); // should return 'olleh'
reverseString('world'); // should return 'dlrow'
reverseString(''); // should return ''
reverseString('a'); // should return 'a'
reverseString('racecar'); // should return 'racecar'
```

### Hints

- As a base case, you can check if the string is empty and return an empty string if so.
- You can use recursion to reverse the string by recursively calling the function with the substring starting from the second character and then concatenating the first character at the end.
- Remember how unwinding works and how function returns are added to the call stack in the reverse order of the function calls.

## Solutions

<details>
  <summary>Click For Solution</summary>

```js
export function reverseString(str: string): string {
  if (str === '') {
    return '';
  }
  return reverseString(str.substring(1)) + str.charAt(0);
}
```

### Explanation

The `reverseString` function uses recursion to reverse the string.

- If the input string is empty (`str === ''`), return an empty string (`''`). Otherwise, call itself with the substring starting from the second character (`str.substr(1)`) and concatenate the first character of the original string at the end (`str[0]`).

For example, if the input is `'hello'`, the function first calls itself with `'ello'` and concatenates `'h'` at the end. Then it calls itself with `'llo'` and concatenates `'e'` at the end. This process continues until the input becomes an empty string, and then the function starts concatenating the characters in reverse order, resulting in the reversed string `'olleh'`.

It is important to have that base case of an empty string, otherwise the function will continue to call itself with substrings of the original string until it runs out of memory and crashes.

#### More Explanation

Let's break it down a little more...

1. When we call `reverseString('hello')`, it executes `reverseString('ello') + 'h'`.
1. Now, `reverseString('ello')` calls `reverseString('llo') + 'e'`.
1. Continuing, `reverseString('llo')` calls `reverseString('lo') + 'l'`.
1. In the next call, `reverseString('lo')` calls `reverseString('o') + 'l'`.
1. Finally, `reverseString('o')` returns `'o'`.

Now, we can start "unwinding" the recursion and concatenating the characters to form the reversed string:

1. `'o' + 'l'` gives `'ol'`.
1. `'ol' + 'l'` gives `'oll'`.
1. `'oll' + 'e'` gives `'olle'`.
1. `'olle' + 'h'` gives `'olleh'`.

So, the function concatenates the characters in reverse order as it "unwinds" the recursion, effectively reversing the original string.

</details>
