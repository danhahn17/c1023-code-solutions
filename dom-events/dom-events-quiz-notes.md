# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  to keep organized/label code as we go

- What is the purpose of events and event handling?
  to create code/webpages that react to actions taken by the user

- Are all possible parameters required to use a JavaScript method or function?
  no

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener()

- What is a callback function?
  a function passed into another function as an argument

- What object is passed into an event listener callback when the event fires?
  event object

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  it is what was interacted with to trigger a callback function

- What is the difference between these two snippets of code?
  `js
element.addEventListener('click', handleClick)
`
  `js
element.addEventListener('click', handleClick())
`
  the second one is immediately invoking the function which doesnt not invoke the event/event.target

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
