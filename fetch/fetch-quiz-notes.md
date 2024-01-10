# fetch-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What does `fetch()` return?
  a promise that resolves with a response object

- What is the default request method used by `fetch()`?
  GET

- How do you specify the request method (`GET`, `POST`, etc.) when calling `fetch`?
  add in a second parameter after the url
  (url, { method : <specified method> })

- How does `fetch` report errors?
  404 or 500 - fetch will resolve and set the ok property to false (will need to check res.ok and throw a new error if it's not ok)

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
