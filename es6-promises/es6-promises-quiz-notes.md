# es6-promises-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the Event Queue model of Promises?

1. when the promise is created, the promsie task is synchronously put onto the event queue
2. synchronous execution of the calling code continues until the end of the function(s)
3. when the current functions complete, the event loop runs
4. the promise task is taken from the event queue and executed
5. after the promise task completes:
   successfully: promise calls the then handler
   with an error: promise calls the catch handler
6. the promise calls the finally handler in all cases

- What are the three states a Promise can be in?
  pending - initial state, neither fulfilled or rejected
  fulfilled - operation was completed successfully
  rejected - operation failed

- How do you handle the fulfillment of a Promise?
  .then

- How do you handle the rejection of a Promise?
  .catch

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
