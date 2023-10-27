/* exported pick */

function pick(source, keys) {
  const object1 = {};
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (source[key] !== undefined) {
      object1[key] = source[key];
    }
  }
  return object1;
}
