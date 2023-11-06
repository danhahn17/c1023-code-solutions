# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  to stay organized, label, keep tabs on code

- What is a "model"?
  represents all page content as objects that can be modified

- Which "document" is being referred to in the phrase Document Object Model?
  the main "entry point" to the page

- What is the word "object" referring to in the phrase Document Object Model?
  any HTML tag, text within a tag, etc.

- What is a DOM Tree?
  DOM representation of HTML as a tree structure made up of tags

- Give two examples of `document` methods that retrieve a single element from the DOM.
  document.getElementById();
  document.querySelector();

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  document.querySelectAll();

- Why might you want to assign the return value of a DOM query to a variable?
  so you can call on it later on

- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir();

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  so that the browser can parse all of the elements in the HTML page before the Javascript code can access them

- What does `document.querySelector()` take as its argument and what does it return?
  argument: a string containing one or more selectors to match (must be a valid CSS selector string)
  returns: an element object representing the first element in the document that matches the specified css selector

- What does `document.querySelectorAll()` take as its argument and what does it return?
  argument: css selector
  returns: all elements inside the object

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
