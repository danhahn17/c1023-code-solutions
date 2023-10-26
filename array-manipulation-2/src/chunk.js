/* exported chunk */

function chunk(array, size) {
  const array1 = [];
  let i = 0;
  while (i < array.length) {
    array1.push(array.slice(i, i + size));
    i += size;
  }
  return array1;
}
