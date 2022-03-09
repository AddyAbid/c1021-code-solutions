/* exported flatten */
/**
 *
 */
function flatten(array) {
  var outPut = [];
  outPut = array.concat.apply([], array);
  return outPut;
}
