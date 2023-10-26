/* exported compact */

function compact(array) {
  const array1 = [];
  for (let i = 0; i < array.length; i++) {
    if (!array[i] !== true) {
      array1.push(array[i]);
    }
  }
  return array1;
}
