# Challenge: Insertion Sort Algorithm

Now that you've learned about the Insertion Sort algorithm, let's put your knowledge to the test and implement the Insertion Sort algorithm in JavaScript.

## Instructions

Implement a function called `insertionSort` that takes an array of numbers as an argument and returns a sorted array using the Insertion Sort algorithm.

### Function Signature

```js
/**
 * Sorts an array using the Insertion Sort algorithm.
 * @param array The array to be sorted.
 * @returns The sorted array.
 */
function insertionSort(arr: number[]): number[];
```

### Examples

```js
console.log(insertionSort([5, 4, 3, 2, 1])); // Output: [1, 2, 3, 4, 5]
console.log(insertionSort([64, 34, 25, 12, 22, 11, 90])); // Output: [11, 12, 22, 25, 34, 64, 90]
```

### Constraints

- The input array can contain any number of elements.
- The elements in the input array are unique and positive integers.

### Notes

- The Insertion Sort algorithm builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.

### Hints

- Divide & conquer: The main idea of this algorithm is to divide the array into a "sorted" and an "unsorted" part. Initially, the first element is considered as the "sorted" part. Then, one by one, elements from the "unsorted" part are moved to the "sorted" part while keeping the "sorted" part sorted.

## Solutions

<details>
  <summary>Click For Solution</summary>

```js
export function insertionSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    const currentElement = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = currentElement;
  }

  return arr;
}
```

### Explanation

- Start a `for-loop`. The condition of the `for-loop` is `i < arr.length`. This will loop through the entire array, starting from the second element.
- Inside the `for-loop`, declare a variable called `currentElement` and set it to the element at index `i`. This is the element that we want to insert into the correct position.
- Declare a variable called `j` and set it to `i - 1`. This is the index of the last element in the "sorted" part of the array.
- Start a `while` loop. The condition of the `while` loop is `j >= 0` (making sure we're not going out of bounds) and `arr[j] > currentElement` (checking if the current element is greater than the element at index `j`).
- Inside the `while` loop, shift the element at index `j` one position to the right (by assigning `arr[j]` to `arr[j + 1]`).
- Decrement `j` by 1 to move to the previous element in the "sorted" part.
- After the `while` loop, insert the `currentElement` at the correct position in the "sorted" part of the array (by assigning `currentElement` to `arr[j + 1]`).
- Outside of the `for-loop`, return the sorted array.

</details>
