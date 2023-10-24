/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  const description =
    person.name +
    ' is a ' +
    person.occupation +
    ' from ' +
    person.birthPlace +
    '.';
  return description;
}
