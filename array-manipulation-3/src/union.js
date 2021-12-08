/* exported union */

/*
create new array for output
combine both given arrays
look at each value in combined array
if output does not include that value
add it
otherwise
remove that value
return output
 */
function union(first, second) {
  var outPut = [];
  var concatArr = first.concat(second);
  for (var i = 0; i < concatArr.length; i++) {
    if (!outPut.includes(concatArr[i])) {
      outPut.push(concatArr[i]);
    } else {
      outPut.splice(i, 1);
    }

  }
  return outPut;
}
