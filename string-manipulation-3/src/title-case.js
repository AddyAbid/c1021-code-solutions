/* exported titleCase */

// function titleCase(title) {
//   var word = title.toLowerCase();
//   word = word.split(': ');
//   console.log(word);
//   word = word.join(': ');
//   console.log(word);
//   for (var i = 0; i < word.length; i++) {
//     word[i] = word[i][0].toUpperCase() + word[i].substring(1);
//     if (word[i] === 'Javascript') {
//       word[i] = 'JavaScript';
//     }
//     var newWord = word[i];
//   }
//   console.log(newWord);
//   var joinedByColon = newWord.join(' ');
// //   // console.log(joinedByColon);
// }

// function titleCase(title) {
//   var word = title.toLowerCase();
//   word = word.split(' ');
//   for (var i = 0; i < word.length; i++) {
//     word[i] = word[i][0].toUpperCase() + word[i].substring(1);
//     if (word[i] === 'In' || word[i] === 'In' || word[i] === 'A' || word[i] === 'An' || word[i] === 'The' || word[i] === 'As' || word[i] === 'At' || word[i] === 'By' || word[i] === 'For' || word[i] === 'Of' || word[i] === 'On' || word[i] === 'Per' || word[i] === 'To') {
//       word[i] = word[i].toLowerCase();
//     } else if (word[i] === 'Javascript') {
//       word[i] = 'JavaScript';
//     } else if (word[i] === 'Javascript:') {
//       word[i] = 'JavaScript:';
//     } else if (word[i] === 'Api') {
//       word[i] = 'API';
//     } else if (word[i - 1] === 'JavaScript:') {
//       word[i] = word[i].toUpperCase();
//     }
//   }

//   var outPut = word.join(' ');
//   outPut = outPut[0].toUpperCase() + outPut.substring(1);
//   console.log(outPut);
//   return outPut;
// }
