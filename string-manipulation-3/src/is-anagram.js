/* exported isAnagram */
/*
assign first given string to variable and split each word by letter, convert to array, alphebetize, then join characters to remove all spaces
assign second given string to variable and split each word by letter, convert to array, alphebetize, then join characters to remove all spaces
compare the first string to the second
if they are eqaul return true
else
return false
*/

function isAnagram(firstString, secondString) {

  var secondSplit = secondString.split(' ').join('').sort();
  var firstSplit = firstString.split(' ').join('').sort();

  if (secondSplit !== firstSplit) {
    return false;
  }
  return true;
}
