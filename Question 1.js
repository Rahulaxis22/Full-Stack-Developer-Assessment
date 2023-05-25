/*
1)find duplicate and same values in two array
var fullWordList = ['1','2','3','4','5'];
var wordsToRemove = ['1','2','3'];

*/
var fullWordList = [];
var wordsToRemove = [];
// Prompt the user to enter the elements for fullWordList array
var fullWordListInput = prompt("fullWordList");
if (fullWordListInput) {
  fullWordList = fullWordListInput.split(",");
}
// Prompt the user to enter the elements for wordsToRemove array
var wordsToRemoveInput = prompt("wordsToRemove");
if (wordsToRemoveInput) {
  wordsToRemove = wordsToRemoveInput.split(",");
}

var duplicates = [];
var sameValues = [];

// Find duplicates and same values
fullWordList.forEach(function(word) {
  if (wordsToRemove.includes(word)) {
    if (duplicates.includes(word)) {
      sameValues.push(word);
    } else {
      duplicates.push(word);
    }
  }
});
console.log("Duplicates  " + duplicates);
console.log("Same Values  " + sameValues);
