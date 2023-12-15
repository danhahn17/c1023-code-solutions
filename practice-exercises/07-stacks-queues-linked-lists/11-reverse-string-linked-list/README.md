# Challenge: Reverse String Using Linked List

## Instructions

Write a function called `reverseStringLinkedList` that takes in a string and returns the reverse of that string.

The function should return the reversed string, but you should use the `LinkedList` class to implement it.

### Function Signature

```js
/**
 * Returns the reverse of a string.
 * @param str The string to reverse.
 * @returns The reverse of the string.
 */
function reverseStringLinkedList(str: string): string;
```

### Examples

```js
reverseStringQueue('hello'); // olleh
reverseStringQueue('Howdy'); // ydwoH
reverseStringQueue('Greetings from Earth'); // htraE morf sgniteerG
```

### Hints

- Loop through the string and add each character to the linked list.
- Loop through the linked list and build the reversed string.

## Solutions

<details>
  <summary>Click For Solution</summary>

```js
export function reverseStringLinkedList(str: string): string {
  const list = new LinkedList();

  for (let i = str.length - 1; i >= 0; i--) {
    list.add(str[i]);
  }

  let reversedString = '';
  let current = list.head;

  while (current !== undefined) {
    reversedString += current.data;
    current = current.next;
  }

  return reversedString;
}
```

### Explanation

- Initialize a new `LinkedList` instance.
- Iterate through the string and add each character to the linked list.
- Initialize a variable called `reversedString` and set it to an empty string and a variable called `current` and set it to the head of the linked list.
- Iterate through the linked list and build the reversed string by adding each node's data to the `reversedString` variable and then setting `current` to the next node.
- Return the `reversedString` variable.

</details>
