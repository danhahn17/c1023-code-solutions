# node-notes-cli-notes

## Notes

All student notes should be written here.

SOLUTION SKELETON:
read
create "note to add"
update #: "new note contents"
delete #

Get arguments from the command line (1st part: command, 2nd part: depends on command)

Switch on command line:
read: read data.json, log notes
create: read data.json, add the note with nextId, write data.json, increment nextId
update: read data.json, update note with command nextId, write data.json
delete: read data.json, delete note with command nextId, write data.json

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
