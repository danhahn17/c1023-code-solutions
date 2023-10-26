/* exported toObject */

function toObject(keyValuePair) {
  const newObject = {};
  newObject[keyValuePair[0]] = keyValuePair[1];
  return newObject;
}
