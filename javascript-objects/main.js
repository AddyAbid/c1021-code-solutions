var student = {
  firsName: 'Addy',
  lastName: 'Abid',
  age: 23
};

var fullName = student.firsName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'Banker';
console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'BMW',
  model: 'M4',
  year: 2021
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = false;

console.log('value of color:', vehicle['color']);
console.log('value of isConvertible:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Stella',
  type: 'Dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
