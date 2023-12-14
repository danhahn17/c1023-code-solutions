# Challenge: Balanced Parentheses

## Instructions

We are going to try one more Stack challenge. Write a function called `balancedParentheses` that takes in a string and checks if the parentheses are balanced.

The function should return true if the parentheses are balanced and false if they are not. Use the stack implementation you created in the earlier exercise.

### Function Signature

```js
/**
 * Returns true if the parentheses in a string are balanced.
 * @param str The string to check.
 * @returns Whether the parentheses in the string are balanced.
 */
function balancedParentheses(str: string): boolean;
```

### Examples

```JS
balancedParentheses('()'); // true
balancedParentheses('()()'); // true
balancedParentheses('(()())'); // true
balancedParentheses('(()'); // false
balancedParentheses(')('); // false
```

### Constraints

- The string will only contain parentheses and no other characters

### Hints

- Push each opening parenthesis onto the stack
- Pop the stack when a closing parenthesis is encountered
- If the stack is empty when a closing parenthesis is encountered, the parentheses are unbalanced

## Solutions

<details>
  <summary>Click For Solution</summary>

```JS
export function balancedParentheses(str: string): boolean {
  const stack = new Stack<string>();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push(str[i]);
    } else if (str[i] === ')') {
      if (stack.isEmpty()) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.isEmpty();
}
```

### Explanation

- Bring in our Stack implementation and initialize a new stack.
- Iterate over each character of the input string `str` and check if the current character `str[i]` is an opening parenthesis (i.e., '('). If it is, the opening parenthesis is pushed onto the stack using `stack.push(str[i])`.
- If the current character is a closing parenthesis (i.e., ')'), check if the stack is empty using stack.`isEmpty()`. If the stack is empty at this point, it means there is a closing parenthesis without a corresponding opening parenthesis, so return false indicating that the parentheses are unbalanced.
- If the stack is not empty, it means there is a matching opening parenthesis for the current closing parentheses. Therefore, remove the top element using `stack.pop()`, which represents the successful pairing of opening and closing parentheses.
- After iterating over all the characters in the string, check if the stack is empty using `stack.isEmpty()`. If the stack is empty, it means all opening parentheses have been matched and popped from the stack, indicating balanced parentheses. In this case, return true.
- If the stack is not empty after the iteration, it means there are unmatched opening parentheses remaining, indicating unbalanced parentheses. In this case, return `false`.

</details>
