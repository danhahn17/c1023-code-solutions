/* exported initial */

function initial(array) {
  const array1 = [];
  for (let i = 0; i < array.length - 1; i++) {
    array1.push(array[i]);
  }
  return array1;
}
