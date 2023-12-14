# Challenge: Calculate Total Sales

## Instructions

Use the given array of product objects below, each with their name, price, and quantity sold. Additionally, you are given a tax rate as a percentage. Write a function called `calculateTotalSalesWithTax` that takes in an array of product objects, along with the tax rate, and returns the total sales amount including tax.

```js
const products = [
  { name: 'Apple', price: 0.5, quantity: 10 },
  { name: 'Banana', price: 0.3, quantity: 20 },
  { name: 'Orange', price: 0.6, quantity: 15 },
];
```

### Function Signature

```js
type Product = {
  name: string,
  price: number,
  quantity: number,
};

/**
 * Calculates and returns the total sales amount including tax from the input array of products and tax rate.
 * @param products The array of product objects.
 * @param taxRate The tax rate as a percentage.
 * @returns The total sales amount including tax.
 */
function calculateTotalSalesWithTax(products: Product[], taxRate: number): number;
```

### Examples

```js
calculateTotalSalesWithTax(
  [
    { name: 'Apple', price: 0.5, quantity: 10 },
    { name: 'Banana', price: 0.3, quantity: 20 },
    { name: 'Orange', price: 0.6, quantity: 15 },
  ],
  8
); // 21.6 (20 + 8% tax)

calculateTotalSalesWithTax(
  [
    { name: 'Chocolate', price: 2.5, quantity: 5 },
    { name: 'Chips', price: 1.2, quantity: 10 },
    { name: 'Soda', price: 1.0, quantity: 8 },
    { name: 'Candy', price: 0.5, quantity: 15 },
  ],
  5
); // 42 (40 + 5% tax)
```

### Constraints

- The input array will contain at least one product object.
- The price and quantity values will be positive numbers.
- The tax rate will be a positive number less than 100.
- Round to 2 decimal places.

### Hints

- Calculate the total sales amount before applying the tax, and then add the tax amount to it.

## Solutions

<details>
  <summary>Click For Solution</summary>

This solution calculates the total sales amount including tax by iterating through the products, summing up the product of price and quantity for each product, and then adding the tax amount.

```js
type Product = {
  name: string,
  price: number,
  quantity: number,
};

export function calculateTotalSalesWithTax(
  products: Product[],
  taxRate: number
): number {
  const totalSales = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
  const taxAmount = (totalSales * taxRate) / 100;
  const totalSalesWithTax = totalSales + taxAmount;
  return parseFloat(totalSalesWithTax.toFixed(2));
}
```

## Explanation

- Calculate the total sales by using the `reduce` method to iterate through the products array, summing up the product of price and quantity for each product.
- Calculate the tax amount by multiplying the total sales by the tax rate and dividing by 100.
- Calculate the total sales including tax by adding the total sales and tax amount together.
- Return the total sales including tax.

</details>
