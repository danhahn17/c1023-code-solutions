# sql-mutations-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the SQL _CRUD_ operations?
  Create (insert) Read (select) Update (update) Delete (delete)

- How do you add a row to a SQL table?
  insert statement
  i.e.
  insert into "nameOfTable" ("columnName", "columnName", etc.) values ("column1Value", "column2Value", etc.);

- How do you add multiple rows to a SQL table at once?
  insert into "nameOfTable" ("columnName", "columnName", etc.) values ("Acolumn1Value", "Acolumn2Value", etc.), ("Bcolumn1Value", "Bcolumn2Value", etc.) returning \*;

- How do you update rows in a database table?
  update statement
  i.e.
  update "nameOfTable" set "columnName" = newValue where "columnName = exactValueOfDesiredRowValueChange;

- How do you delete rows from a database table?
  delete statement
  i.e.
  delete from "nameOfTable" where "columnName" = value returning \*;

- Why is it important to include a `where` clause in your `update` and `delete` statements?
  to prevent the entire table from updating or deleting
  specifies what you're updating/deleting

- How do you accidentally delete or update all rows in a table?
  for update: update "nameOfTable" set "columnName" = value;
  for delete: delete from "nameOfTable";

- How do you get back the modified row without a separate `select` statement?
  returning clause

- Why did you get an error when trying to delete certain films?
  foreign key violated

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
