/* exported reverse */

function reverse(array) {
  const array1 = [];
  for (let i = array.length - 1; i >= 0; i--) {
    array1.push(array[i]);
  }
  return array1;
}
