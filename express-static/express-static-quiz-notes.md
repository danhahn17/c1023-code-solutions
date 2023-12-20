# express-static-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of the Express Static middleware?
  expose a directory or a file to a particular URL so its contents can be publicly accessed
  make it easy for servers to send files to the client

- What does `express.static()` return?
  middleware
  "The function determines the file to serve by combining req.url with the provided root directory. When a file is not found, instead of sending a 404 response, it calls next() to move on to the next middleware, allowing for stacking and fall-backs."

- What are several examples of static files?
  images, videos, html, css, javascript, typescript,

- What is a good way to serve application images using Express?
  set up your server to have a directory called public and use express.static();

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
