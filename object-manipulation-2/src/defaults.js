/* exported defaults */
/*
look at each key in given source object
if that key is not in given target object
assign source keys to target keys keeping the original target values
*/
function defaults(target, source) {
  for (var key in source) {
    if (!(key in target)) {
      target[key] = source[key];
    }
  }
}
