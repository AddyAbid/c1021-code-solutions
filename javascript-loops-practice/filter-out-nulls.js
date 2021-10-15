/* exported filterOutNulls */
function filterOutNulls(values) {
  var outPut = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      outPut.push(values[i]);
    }
  }
  return outPut;
}
