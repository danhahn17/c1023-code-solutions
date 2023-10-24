function convertMinutesToSeconds(minutes) {
  const seconds = minutes * 60;
  console.log('There are ' + seconds + ' seconds in ' + minutes + ' minutes.');
}
convertMinutesToSeconds(300);

function greet(name) {
  const greeting = 'Hey, ' + name + '.';
  console.log(greeting);
}
greet('Beavis');

function getArea(width, height) {
  const area = width * height;
  console.log(
    'The area of a rectangle with a width of ' +
      width +
      ' and a height of ' +
      height +
      ' is ' +
      area +
      '.'
  );
}
getArea(17, 42);

function getFirstName(person) {
  const personFirstName = person.firstName;
  console.log('The first name is ' + personFirstName + '.');
}
getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });

function getLastElement(array) {
  const lastIndex = array.length - 1;
  const lastElement = array[lastIndex];
  console.log('The last element in this array is ' + lastElement + '.');
}
getLastElement(['propane', 'and', 'propane', 'accessories']);
