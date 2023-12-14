# Challenge: Word Frequency Counter using HashTable

## Instructions

Write a function called `wordInstanceCounter` that takes a string and a word as input and returns the number of instances of that word in the string. This function should count the occurrences of the specified word, ignoring case and excluding punctuation.

### Function Signature

```js
/**
 * Returns the number of instances of the specified word in the input string.
 * @param str The input string containing words.
 * @param word The word to count instances of.
 * @returns The number of instances of the specified word.
 */
function wordInstanceCounter(str: string, word: string): number;
```

### Examples

```js
console.log(
  wordInstanceCounter('The quick brown fox jumps over the lazy dog.', 'the')
); // Output: 2
console.log(
  wordInstanceCounter(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'ipsum'
  )
); // Output: 1
console.log(wordInstanceCounter('Hello, world!', 'hello')); // Output: 1
console.log(wordInstanceCounter('Hello, Hello, Hello!', 'hello')); // Output: 3
```

### Constraints

- The input string will only contain letters, spaces, and punctuation marks.

### Hints

- You can use a `HashTable` to store the word frequencies, where the word is the key, and the count is the value. Loop through each word, update the count in the `HashTable`, and return the count of the specified word.

### Solution

<details>
  <summary>Click For Solution</summary>

```js
export function wordInstanceCounter(str: string, word: string): number {
  const words = str.toLocaleLowerCase().split(/\W+/);
  const wordFrequency = new HashTable<number>();
  const targetWord = word.toLocaleLowerCase();
  let count = 0;

  for (const currentWord of words) {
    if (currentWord === '') continue;

    if (wordFrequency.has(currentWord)) {
      wordFrequency.set(currentWord, (wordFrequency.get(currentWord) ?? 0) + 1);
    } else {
      wordFrequency.set(currentWord, 1);
    }

    if (currentWord === targetWord) {
      count = wordFrequency.get(currentWord) ?? 0;
    }
  }

  return count;
}
```

### Explanation

- Convert the input string to lowercase and split it into an array of words
- Create a new instance of the `HashTable` class to store word frequencies
- Initialize a count variable to store the number of instances of the target word
- Loop through each word in the array of words
- Ignore empty strings (caused by multiple spaces or punctuation marks)
- Check if the current word already exists in the `HashTable`
- If the word exists, increment its frequency by 1
- If the word doesn't exist, add it to the `HashTable` with a frequency of 1
- Check if the current word is the target word
- Get the frequency of the target word from the `HashTable`
- Return the count of instances of the target word

</details>
