function ExampleConstructor() {

}

console.log('prototype of ExampleConstructor:', ExampleConstructor.prototype);
console.log('typeof prototype:', typeof ExampleConstructor.prototype);

var exampleConstructor1 = new ExampleConstructor();
console.log('value of exampleConstructor1:', exampleConstructor1);

var checkInstance = exampleConstructor1 instanceof ExampleConstructor;
console.log('value of checkInstance:', checkInstance);
