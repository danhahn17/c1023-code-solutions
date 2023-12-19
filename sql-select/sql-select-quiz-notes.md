# sql-select-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is SQL and how is it different from languages like JavaScript?
  primary way of interacting with relational databases - retrieves, creates and manipulates data in a relational database
  SQL is a declarative programming language - programmers describe the results they want and the programming environment comes up with its own plan for getting those results (similar to HTML and CSS)
  in other words - the programmer declares their intent and the web browser does its best to output the desired results according to a predefined set of rules

- How do you retrieve specific columns from a database table?
  use a select statement = select keyword, comma-separated list of column names (in double quotes), from clause, table name (in double quotes), end with a ;
  i.e.
  select "x", "y", "z" from "table_name";

- How do you filter rows based on some specific criteria?
  using a where clause
  you use the where clause with the column name and then the specific value
  i.e.
  select "x", "y", "z" from "table_name" where "category" = 'cleaning';

- What are the benefits of formatting your SQL?
  more readable

- What are four comparison operators that can be used in a `where` clause?
  <, >, =, !=

- How do you limit the number of rows returned in a result set?
  use the limit clause and then specify the maximum number of rows
  desc changes sorting order to descending instead of ascending
  i.e.
  select "x", "y", "z" from "table_name" order by "price" desc limit 1;

- How do you retrieve all columns from a database table?
  to select all the columns - you would just use an asterik instead of listing column names

- How do you control the sort order of a result set?
  you would use an order by clause (with the column name in double dquotes) that follows your from clause
  the default sort order of the results is ascending order
  you can sort by multiple columns
  i.e.
  select "x", "y", "z" from "table_name" order by "price";

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
