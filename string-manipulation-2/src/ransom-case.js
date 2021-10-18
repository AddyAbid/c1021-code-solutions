/* exported ransomCase */
function ransomCase(string) {
  var outPut = '';
  var lower = string.toLowerCase();
  for (var i = 0; i < lower.length; i += 2) {
    if (lower[i].toUpperCase()) {
      lower[i] = lower[i].toLowerCase();
      outPut += lower[i];
    } else if (lower[i].toLowerCase()) {
      lower[i] = lower[i].toUpperCase();
      outPut += lower[i];
    }
  }
  return outPut;
}
