/* exported capitalizeWords */

function capitalizeWords(string) {
  const newString = string.toLowerCase();
  const splitString = newString.split(' ');
  let finalString = '';
  for (let i = 0; i < splitString.length; i++) {
    if (i < splitString.length - 1) {
      finalString +=
        splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1) + ' ';
    } else {
      finalString +=
        splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1);
    }
  }
  return finalString;
}
