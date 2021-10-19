/* exported pick */
/*
need storage
*/

function pick(source, keys) {
  var newObj = {};
  for (var key in source) {
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === key) {
        return newObj[keys[i]];
      }
    }
  }
}
