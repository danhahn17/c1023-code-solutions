# dom-creation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Does the `document.createElement()` method insert a new element into the page?
  it doesn't unless you use appendChild() to an existing element

- How do you add an element as a child to another element?
  appendChild()

- What do you pass as the arguments to the `element.setAttribute()` method?
  (name, value)

- What steps do you need to take in order to insert a new element into the page?
  create a variable with .createElement and desired tag
  create any necessary class/attribute
  append if necessary

- What is the `textContent` property of an element object for?
  text content of the node and its descendents

- Name two ways to set the `class` attribute of a DOM element.
  $object.className = 'class'
  classList (add, remove, replace, toggle methods)

- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
  reusability (use multiple times)
  abstraction (makes code more readable/maintainable)
  maintainability (easier to make changes in fxn)
  testability (eases testing of code)

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
