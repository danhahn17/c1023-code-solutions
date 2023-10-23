const student = {
  firstName: 'Daniel',
  lastName: 'Hahn',
  age: 27,
};
const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);
student.livesInIrvine = true;
student.previousOccupation = 'Logistics Coordinator';
console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

const vehicle = {
  make: 'Ford',
  model: 'Escape',
  year: 2022,
};
vehicle['color'] = 'gray';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

const pet = {
  name: 'Ollie',
  type: 'dog',
};
delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
