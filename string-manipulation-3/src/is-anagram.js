/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var firstSplit = firstString.split('').sort().join('');
  var secondSplit = secondString.split('').sort().join('');

  if (firstSplit === secondSplit) {
    return true;
  }
  return false;
}
