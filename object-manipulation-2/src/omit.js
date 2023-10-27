/* exported omit */

function omit(source, keys) {
  const object1 = {};

  for (const key in source) {
    let omitKey = false;

    for (let i = 0; i < keys.length; i++) {
      if (key === keys[i]) {
        omitKey = true;
        break;
      }
    }
    if (!omitKey) {
      object1[key] = source[key];
    }
  }

  return object1;
}

// function omit(source, keys) {
//   const omitted = {};
//   for(const key in source) {
//     if (!keys.includes(key)){
//       omitted[key] = source[key];
//     }
//   }
//   return omitted;
// }
