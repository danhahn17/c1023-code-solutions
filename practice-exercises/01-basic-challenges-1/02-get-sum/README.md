# Challenge: Get Sum

This is another very basic practice exercise just to get you into the hang of things.

## Instructions

Write a function called `getSum` that takes in two numbers and returns the sum of those two numbers.

### Function Signature

```js
/**
 * Returns the sum of two numbers.
 * @param a The first number.
 * @param b The second number.
 * @returns The sum of the two numbers.
 */
function getSum(a: number, b: number): number;
```

### Examples

```js
getSum(1, 2); // 3
getSum(10, 5); // 15
getSum(2, 2); // 4
getSum(10, 5); // 15
```

### Constraints

- The function must return a number

### Hints

- You can use the `+` operator to add two numbers together.

## Solutions

<details>
  <summary>Click For Solution</summary>

```js
export function getSum(a: number, b: number): number {
  return a + b;
}
```

### Explanation

This is a pretty simple challenge. We created a function that takes in two values and we added those two values together. We then returned the sum of those two values.

</details>
