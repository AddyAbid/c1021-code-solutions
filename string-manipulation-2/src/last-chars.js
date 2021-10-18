/* exported lastChars */
function lastChars(length, string) {
  var outPut = [];
  outPut += string;
  outPut.slice(-outPut.length, length);

}
