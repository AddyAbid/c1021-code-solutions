function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}
var secondsToMinutes = convertMinutesToSeconds(5);
console.log('convertSecondsToMinutes: ', secondsToMinutes);

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}
var greeting = greet('Addy');
console.log('greet:', greeting);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var area = getArea(17, 42);
console.log('getArea:', area);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

var name = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('getFirstName:', name);

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}

var element = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastElement:', element);
