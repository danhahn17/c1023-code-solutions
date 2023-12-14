# Challenge: Anagram Grouping Challenge

## Instructions

Create a function called `anagramGrouping` to use the `HashTable` class that we created. The function should take an array of words as input and return an array of arrays, where each inner array represents a group of anagrams.

### Function Signature

```js
/**
 * Groups anagrams from the input array of words using a HashTable.
 * @param words An array of words.
 * @returns An array of arrays, each representing a group of anagrams.
 */
function anagramGrouping(words: string[]): string[][];
```

### Examples

```js
anagramGrouping(['listen', 'silent', 'hello', 'world', 'act', 'cat']);
// Output: [['listen', 'silent'], ['act', 'cat'], ['hello'], ['world']]
```

### Hints

- You can use the provided `HashTable` class to implement efficient anagram grouping. Note that the provided class includes the `getValues` method, which might be useful.
- Convert each word to a sorted string of characters to identify anagrams.
- For each sorted string, store anagrams in the HashTable with the sorted string as the key.

## Solution

<details>
  <summary>Click For Solution</summary>

```js
export function anagramGrouping(words: string[]): string[][] {
  const anagramGroups = new HashTable<string[]>();

  for (const word of words) {
    const sortedChars = word.split('').sort().join('');
    if (anagramGroups.get(sortedChars)) {
      anagramGroups.get(sortedChars)?.push(word);
    } else {
      anagramGroups.set(sortedChars, [word]);
    }
  }

  return anagramGroups.getValues();
}

```

### Explanation

This is very similar to the anagram grouping where we used maps.

- Replace the `Map` with a `HashTable` to efficiently group anagrams.
- Iterate through each word in the input array and create a sorted version of the word's characters.
- This sorted string is used as a key in the `HashTable`. If the key already exists in the `HashTable`, we append the current word to the list of anagrams. If the key does not exist, we create a new entry in the `HashTable` with the key and an array containing the current word.
- After iterating through all the words, use the `getValues` method of the `HashTable` to obtain an array of arrays, where each inner array represents a group of anagrams.
- Return the array of anagram groups.

</details>
