# node-process-argv-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `process` object in a Node.js program?
  a global that provides information about and control over the current node.js process

- How do you access the `process` object in a Node.js program?
  it's always available to node.js without using require() but can also be explicitly accessed using require() --> const process = require('process');

- What are environment variables and how do you access them?
  user-definable value that can affect the way running processes will behave on a computer
  you can access them through the global process object since it's a property of it

- What is the data type of `process.argv` in Node.js?
  array (containing the command line arguments passed when the node.js process was launched)

- How do you access the command line arguments in a Node.js program?
  process.argv

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
