/*
1)find duplicate and same values in two array
var fullWordList = ['1','2','3','4','5'];
var wordsToRemove = ['1','2','3'];

*/
var fullWordList = [];
var wordsToRemove = [];
var fullWordListInput = prompt("fullWordList");
if (fullWordListInput) {
  fullWordList = fullWordListInput.split(",");
}
var wordsToRemoveInput = prompt("wordsToRemove");
if (wordsToRemoveInput) {
  wordsToRemove = wordsToRemoveInput.split(",");
}
var duplicates = [];
var sameValues = [];
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
/*In this code, we use the forEach() method to iterate over the fullWordList array. 
For each word in the array, we check if it exists in the wordsToRemove array using the includes() method.
If the word is found in the wordsToRemove array and it is already present in the duplicates array, 
it is considered a same value and added to the sameValues array. Otherwise, if it is found in the wordsToRemove array and not already in the duplicates array, 
it is considered a duplicate and added to the duplicates array.*/