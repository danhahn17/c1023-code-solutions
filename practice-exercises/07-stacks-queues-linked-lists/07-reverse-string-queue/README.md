# Challenge Reverse a String Using a Queue

## Instructions

Write a function called `reverseStringQueue` that takes in a string and returns the reverse of that string.

The function should return the reversed string, but you should use the `Queue` class to do it.

### Function Signature

```js
/**
 * Returns the reverse of a string.
 * @param str The string to reverse.
 * @returns The reverse of the string.
 */
function reverseStringQueue(str: string): string;
```

### Examples

```js
reverseStringQueue('hello'); // olleh
reverseStringQueue('Howdy'); // ydwoH
reverseStringQueue('Greetings from Earth'); // htraE morf sgniteerG
```

### Constraints

- The string will only contain lowercase letters and spaces

### Hints

- Enqueue all the characters in the string into the queue
- Dequeue all the characters from the queue and add them to a new string

## Solutions

<details>
  <summary>Click For Solution</summary>

```js
export function reverseStringWithQueue(str: string): string {
  const queue = new Queue<string>();

  for (let i = str.length - 1; i >= 0; i--) {
    queue.enqueue(str[i]);
  }

  let reversedString = '';
  while (!queue.isEmpty()) {
    reversedString += queue.dequeue();
  }

  return reversedString;
}
```

### Explanation

- Initialize a new queue
- Iterate over the `str` and enqueue each character into the queue.
- Create an empty string and dequeue each character from the queue and add it to the string.
- Return the string.

</details>
