# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  property of an event object that refers to the element that triggered the event

- Why is it possible to listen for events on one element that actually happen its descendent elements?
  the eventListener analyzes bubbled events to find a match in child elements

- What DOM element property tells you what type of element it is?
  tagName property

- What does the `element.closest()` method take as its argument and what does it return?
  selectors
  returns the closest ancestor element or itself which matches the selectors

- How can you remove an element from the DOM?
  remove() method

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  by adding a parent element to the clicakable DOM elements and add the eventListener to the parent element

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
