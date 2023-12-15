# Challenge: Palindrome

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. An example of a palindrome is "madam".

## Instructions

Write a function called `isPalindrome` that takes in a string and returns `true` if the string is a palindrome and `false` if it is not.

### Function Signature

```js
/**
 * Returns true if the string is a palindrome.
 * @param str The string to check.
 * @returns True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str: string): boolean;
```

### Examples

```js
isPalindrome('madam'); // true
isPalindrome('racecar'); // true
isPalindrome('hello'); // false
isPalindrome(''); // true
```

### Constraints

- The input string will only contain lowercase letters and spaces
- The function should ignore spaces when checking if the string is a palindrome

### Hints

- You can solve this in a way that is similar to the reverse string challenge with some added steps.
- Remember, you want to remove any non-alphanumeric characters from the string before comparing it to the reversed string. There are multiple ways to do this, but one way is to use the `replace` method with a regular expression of `/[^a-z0-9]/g`.

## Solutions

<details>
  <summary>Click For Solution 1</summary>

This solution does not use a regular express to strip out non-alphanumeric characters. There are a few ways to do this. We are going to create some helper functions to make it easier.

```js
export function isPalindrome(str: string): boolean {
  const formattedStr = removeNonAlphanumeric(str.toLocaleLowerCase());
  const reversedStr = reverseString(formattedStr);
  return formattedStr === reversedStr;
}

function removeNonAlphanumeric(str: string): string {
  let formattedStr = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (isAlphaNumeric(char)) {
      formattedStr += char;
    }
  }
  return formattedStr;
}

function isAlphaNumeric(char: string): boolean {
  const code = char.charCodeAt(0);
  return (
    (code >= '0'.charCodeAt(0) && code <= '9'.charCodeAt(0)) || // Numbers 0-9
    (code >= 'a'.charCodeAt(0) && code <= 'z'.charCodeAt(0)) // Lowercase letters a-z
  );
}

function reverseString(str: string): string {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
```

### Explanation

- Create a helper function called `removeNonAlphanumeric` that takes in a string and returns a new string with all non-alphanumeric characters removed. We do this by looping through the string and checking if each character is alphanumeric with another helper function called `isAlphaNumeric`.

- In the `isAlphaNumeric` function, we use the `charCodeAt` method to get the character code of the character. We then check if the character code is between the character codes for 0-9, or if it is between the character codes for a-z. If it is, we return `true`. If it is not, we return `false`.

- Once we have a string with only alphanumeric characters, we can reverse it and compare it to the original string to see if it is a palindrome.

</details>

<details>
  <summary>Click For Solution 1</summary>

Using `replace` with a regular expression is the easiest way to solve this challenge.

```js
export function isPalindrome(str: string): boolean {
  const formattedStr = str.toLocaleLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = formattedStr.split('').reverse().join('');
  return formattedStr === reversedStr;
}
```

### Explanation

- Take the input string and make it lowercase.
- Use the `replace` method with a regular expression to remove any non-alphanumeric characters from the string. That way we can compare the string without worrying about spaces or punctuation, such as 'racecar' and 'race car'.
- Store the result in a variable called `formattedStr`.
- Reverse the string, just like we did in the last challenge.
- Compare the original string to the reversed string and return the result. If it is a palindrome, the two strings will be equal, so we return `true`. If it is not a palindrome, the two strings will not be equal, so we return `false`.

</details>
