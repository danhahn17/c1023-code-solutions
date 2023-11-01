/* exported invert */

function invert(source) {
  const invertedSource = {};
  for (const key in source) {
    invertedSource[source[key]] = key;
  }
  return invertedSource;
}
