/* exported zip */
function zip(first, second) {
  var total = [];
  var m = [];
  first.forEach(function (i, j) {
    total.push(i);
    total.push(second[j]);
  });
  for (var i = 0; i < total.length; i += 2) {
    var newArr = total.slice(i, i + 2);
    m.push(newArr);
  }

  return m;
}
