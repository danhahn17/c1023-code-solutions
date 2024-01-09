# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
  when the component is created and inserted into the DOM

- What is a React Effect?
  allow you to specify side effects that are caused by rendering itself rather than by a particular event such as setting up a sever connection since it will happen no matter which interaction caused the component to appear

- When should you use an Effect and when should you not use an Effect?
  USE: when synchronizing with some external system (APIs, third-party widgets, network, etc.)
  NOT USE: transform data for rendering, handle user effects

- When do Effects run?
  at the end of a commit after the screen updates

- What function is used to declare an Effect?
  useEffect(()=>{});

- What are Effect dependencies and how do you declare them?
  way of preventing react from re-running the effect
  you specify them by adding an empty array at the end of the useEffect() and adding in the prop that the effect depends on

- Why would you want to clean up from an Effect?
  if the effect needs specificiation on how to stop/undo what they're doing
  i.e. connect and disconnect, subscribe and unsubscribe, etc.

- How do you clean up from an Effect?
  return a cleanup function

- When does the cleanup function run?
  each time before the effect runs again and one final time when the component unmounts (gets removed)

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
