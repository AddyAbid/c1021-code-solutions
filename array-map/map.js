function map(array, transform) {
  var outPut = [];
  for (var i = 0; i < array.length; i++) {

    outPut.push(transform(array[i]));
  }
  return outPut;
}
