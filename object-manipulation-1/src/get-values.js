/* exported getValues */

function getValues(object) {
  const array1 = [];
  for (const key in object) {
    array1.push(object[key]);
  }
  return array1;
}
