const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
const pricesList = prices.map((prices) => {
  return {
    price: prices,
    salePrice: prices / 2,
  };
});
console.log(pricesList);

const formattedPrices = prices.map((prices) => {
  return `${prices.toFixed(2)}`;
});
console.log(formattedPrices);
