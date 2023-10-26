/* exported getKeys */

function getKeys(object) {
  const array1 = [];
  for (const key in object) {
    array1.push(key);
  }
  return array1;
}
