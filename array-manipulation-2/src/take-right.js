/* exported takeRight */

function takeRight(array, count) {
  const array1 = [];
  for (let i = 0; i < array.length; i++) {
    if (array.length > 0 && i >= array.length - count) {
      array1.push(array[i]);
    } else if (array.length > 0 && count > array.length) {
      array1.push(array[i]);
    }
  }
  return array1;
}
