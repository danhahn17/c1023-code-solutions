const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

console.log('In order:');
values.forEach((element) => console.log(element));

console.log('Reverse order:');
let i = values.length - 1;
values.forEach(() => {
  console.log(values[i--]);
});
