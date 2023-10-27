/* exported take */

function take(array, count) {
  const array1 = [];
  for (let i = 0; i < count; i++) {
    if (array.length > 0) {
      array1.push(array[i]);
    } else {
      return array1;
    }
  }
  return array1;
}
