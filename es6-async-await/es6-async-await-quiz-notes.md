# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  asynchronous programming
  async = defines the asynchrnous function or method
  await = keyword inside an asynchronous function to call other asynchronous functions and wait for their completion without blocking the entire program - it's returned to the event loop allowing other tasks to run in the meantime

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  async and await are more readable and straightforward to follow

- When do you use `async`?
  when you need a function to run in the background such as when you need the application to remain responsive even when performing time consuming operations

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  USE: for asynchronous functions - when you want to manage how the flow of execution is done (manage tasks to be done in a specific order)
  NOT USE: when a function is fast/non-blocking - if await is used with a synchronous function then it will not automatically run asynchronously and doesn't allow other tasks to run while waiting for the synchronous function to complete

- How do you handle errors with `await`?
  try and catch

- What do `try`, `catch` and `throw` do? When do you use them?
  try = to execute a code block and handle any exceptions that may occur
  catch = define specific exceptions (speicifies the identifier that holds the value specified by the throw statement)
  throw = specifies the value to be thrown

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  promise won't be awaited - unresolved promises (pending promise) & unhandled promise rejection

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?

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
