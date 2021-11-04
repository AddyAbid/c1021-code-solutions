/* exported flatten */

function flatten(array) {
  var outPut = [];
  if (Array.isArray(array)) {
    outPut = array.concat.apply([], array);
  }
  return outPut;
}
