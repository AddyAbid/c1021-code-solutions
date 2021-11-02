/* exported pick */
/*

*/

function pick(source, keys) {
  var outPut = {};
  for (var key in source) {
    for (var i = 0; i < keys.length; i++) {
      if (key === keys[i]) {
        outPut[keys[i]] = source[key];
      }
    }
  }
  return outPut;
}
