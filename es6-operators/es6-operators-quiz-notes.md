# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?

&& operator returns a boolean value of true if the operands are true - otherwise it returns false
|| operator returns a boolean value of true as long as one operand has a value of true

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?

it only evaluates part of the entire expression and runs through the entire expression only if the first oeprand meets requirements
for &&: if the first operand is false then the entire expression is false so there is no need to evaluate the second operand
for ||: if the first oeprand is true then the entire expression is true so there is no need to evaluate the second operand

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?

?? operator returns the right hand operand when the left hand operand is null or undefined but wiil otherwise return the left hand operand
|| returns the right hand operand if the left hand operand is any falsy value - not only null or undefined

- What is the `?:` (ternary) operator? How does it differ from `if/else`?

?: is an operator that has three operands x ? y : z where if x is true then y is returned and if x is false then z is returned
?: is different from if/else in that it has a condition and provides a truthy return and a falsy return

- What is the `?.` (optional chaining) operator? When would you use it?

?. accesses an object's property or calls a fxn - if the object or fxn is undefined or null then ?. returns undefined
you would use ?. to check that a property or fxn exists - especially when trying to obtain nested properties or fxns

- What is `...` (spread) syntax? How do you use it with arrays and objects?
  allows an iterable (array or string, etc.) to be expanded in places where zero or more arguments (for fxn calls) or elements (for array literals) are expected
  in object literals - the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created

- What data types can be spread into an array? Into an object?
  array - elements
  objects - key-value pairs

- How does spread syntax differ from rest syntax?
  spread syntax expands an array into elements whereas rest syntax collects multiple elements and condenses them into a single element

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
