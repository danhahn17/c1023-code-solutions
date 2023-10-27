/* exported includes */

function includes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return true;
    }
  }
  return false;
}
