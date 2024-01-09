# javascript-conditionals-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- In JavaScript, when is scope determined?
  where the function is declared

- What allows JavaScript functions to "remember" variables from their surroundings?
  closures

- What values does a closure contain?
  function reference - encloses the current variable scope into it

- When is a closure created?
  when a function is created

- How can you tell if a function will be created with a closure?

1. Nested Function: function defined inside another function.
2. Reference to Outer Variables: references to variables from the outer function within the inner function
3. Returned Inner Function: outer function returns the inner function then the inner function becomes a closure.

- In React, what is one important case where you need to know if a closure was created?
  useEffect - stale closures (close captures a varaiable but is not updated when that variable changes) and infinite rerenders

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
