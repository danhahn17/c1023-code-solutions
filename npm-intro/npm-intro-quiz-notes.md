# npm-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is NPM?
  software registry - developers share and borrow packages

- What is a package?
  a file or directory described by a package.json

- What are some other popular package managers?
  Yarn and PNPM

- How can you create a `package.json` with `npm`?
  npm init command with the --yes or -y flag

- What is a dependency and how do you add one to a package?
  another package that a package requires to function/a library that a project needs to function effectively
  npm install

- What happens when you add a dependency to a package with `npm`?
  added to package.json and then create a node_modules or add code to the node_modules folder

- What is a devDependency and how do you add one to a package?
  packages in the package. json file that you need only for project development purposes
  npm install --save-dev

- How do you define and run `npm` scripts? Why are these useful?
  add a new scripts object to package.json with the property name and value - then use npm run
  to execute commands so you don't have to manually do it (reusability)

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
