/* exported titleCase */

function titleCase(title) {
  var lowerCaseWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var output = '';
  var titleSplit = title.split(' ');
  for (var i = 0; i < titleSplit.length; i++) {
    if (titleSplit[i].toLowerCase() === 'api') {
      titleSplit.splice(i, 1, 'API');
    } else if (titleSplit[i].toLowerCase() === 'javascript') {
      titleSplit.splice(i, 1, 'JavaScript');
    } else if (titleSplit[i].toLowerCase() === 'javascript:') {
      titleSplit.splice(i, 1, 'JavaScript:');
    } else if (lowerCaseWords.includes(titleSplit[i])) {
      titleSplit.splice(i, 1, titleSplit[i].toLowerCase());
    } else {
      titleSplit.splice(i, 1, titleSplit[i][0].toUpperCase() + titleSplit[i].slice(1).toLowerCase());
    }
  }
  var modTitle = titleSplit.join(' ');
  for (var j = 0; j < modTitle.length; j++) {
    if (modTitle[j] === ':') {
      modTitle = modTitle.slice(0, j + 1) + ' ' + modTitle[j + 2].toUpperCase() + modTitle.slice(j + 3, modTitle.length);
    } else if (modTitle[j] === '-') {
      modTitle = modTitle.slice(0, j + 1) + modTitle[j + 1].toUpperCase() + modTitle.slice(j + 2, modTitle.length);
    }
  }
  output = modTitle[0].toUpperCase() + modTitle.slice(1);
  return output;
}
