/* exported drop */

function drop(array, count) {
  const array1 = [];
  for (let i = count; i < array.length; i++) {
    if (array.length > 0) {
      array1.push(array[i]);
    } else {
      return array1;
    }
  }
  return array1;
}
