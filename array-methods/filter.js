const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const evenNumbers = numbers.filter((numbers) => numbers % 2 === 0);
console.log('Even numbers', evenNumbers);

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];

const noD = names.filter((name) => !name.toLowerCase().includes('d'));
console.log('No D', noD);
