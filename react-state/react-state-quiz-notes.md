# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
  hooks allow function components to have access to state and other react features

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  start with use
  only be called at the top level of your components or your own hooks
  can't call inside conditions, loops or other nested functions
  "you 'use' react features at the top of your component similar to how you 'import' modules at the top of your file"

- What is the purpose of state in React?
  telling react that you want a component "remember" omsething

- Why can't we just maintain state in a local variable?
  local variables don't persist between renders
  changes to lcoal variables won't trigger renders

- What two actions happen when you call a `state setter` function?
  updates the variable and triggers react to render the component again

- When does the local `state variable` get updated with the new value?
  after the re-render

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
