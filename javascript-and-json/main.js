const library = [
  {
    isbn: 111 - 1 - 11 - 111111 - 1,
    title: 'Adventures of Khanh',
    author: 'Khanh Nguyen',
  },
  {
    isbn: 222 - 2 - 22 - 222222 - 2,
    title: 'Adventures of Chris',
    author: 'Chris Tran',
  },
  {
    isbn: 333 - 3 - 33 - 333333 - 3,
    title: 'Adventures of Dan',
    author: 'Dan Hahn',
  },
];

console.log('array of books:', library);
console.log('typeOf library:', typeof library);

console.log('JSON.stringify(library):', JSON.stringify(library));
console.log('typeof JSON.stringify(library):', typeof JSON.stringify(library));

const jsonStr = '{"Number ID": 1023, "String Name": "c-1023"}';
console.log('JSON.stringify(jsonStr):', JSON.stringify(jsonStr));
console.log('typeof jsonStr:', typeof JSON.stringify(jsonStr));

const jsonObj = JSON.parse(jsonStr);
console.log('JSON.parse(jsonObj):', jsonObj);
console.log('typeof jsonObj:', typeof jsonObj);
