# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
  () => code block

- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  doesn't require a return statement
  has an implicit return - already returns the value that should be returned

- When using _concise body syntax_, how do you return an object literal?
  wrap object literal in ()

- In the expression
  `js
    foo(() => 42);
    `

  - Identify the arrow function
    () => 42

  - How many arguments does the arrow function take?
    0

  - What value does it return?
    42

  - How many arguments are passed to the function `foo`?
    1 (just the arrow fxn)

  - What type of argument is passed to the function `foo`?
    function

- In the expression
  `` js
    bar((y) => {
      console.log(`4y = ${4 * y}`);
    });
     `` - Identify the arrow function
  (y) => {console.log(`4y = ${4 * y}`)}

      - How many arguments does the arrow function take?

  1 (y)

      - What value does it return?

  undefined

      - How many arguments are passed to the function `bar`?

  1

      - What type of argument is passed to the function `bar`?

  arrow function

      - When does the arrow function's code get executed?

  when bar gets called

- How does the value of `this` differ between standard functions and arrow functions?
  the value of 'this' in an arrow fxn is taken from lexical scope

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
