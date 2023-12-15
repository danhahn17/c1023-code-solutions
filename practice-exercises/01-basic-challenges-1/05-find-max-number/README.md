# Challenge: Find Max Number

## Instructions

Write a function called `findMaxNumber` that takes in an array of numbers and returns the largest number in the array.

### Function Signature

```js
/**
 * Returns the largest number in an array.
 * @param arr The array of numbers.
 * @returns The largest number in the array.
 */
function findMaxNumber(arr: number[]): number;
```

### Examples

```js
findMaxNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 10
findMaxNumber([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]); // 10
findMaxNumber([1, 2, 3, 4, 5, 10, 9, 8, 7, 6]); // 10
```

### Hints

- There is a very easy way to do this using a specific built-in method. You should not do it that way. Solve this problem using a `for` loop.

## Solutions

<details>
  <summary>Click For Solution 1</summary>

Here is a solution using a `for` loop.

```js
export function findMaxNumber(arr: number[]): number {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}
```

### Explanation

- Create a variable called `max` and setting it equal to the first element in the array.
- Loop through the array starting at the second element.
- Check if the current element is greater than the current value of `max`. If it is, we set `max` equal to the current element.
- Return `max` after the loop is finished.

</details>

<details>
  <summary>Click For Solution 2</summary>

This is the easy way to do it. There is a method called `Math.max()` that will return the largest number in an array. This is not a good solution for practicing, but it is good to know that this method exists.

```js
export function findMaxNumber(arr: number[]): number {
  return Math.max(...arr);
}
```

### Explanation

There is not too much explanation needed here.

</details>
