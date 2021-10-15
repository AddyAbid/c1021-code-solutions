/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var outPut = [];
  for (var i = 0; i < words.length; i++) {
    var newVal = words[i] + suffix;
    outPut.push(newVal);
  }

  return outPut;
}
