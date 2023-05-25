const word = prompt("word:");

let currentChainLength0 = 0;
let currentChainLength1 = 0;
let longestChainLength0 = 0;
let longestChainLength1 = 0;

for (let i = 0; i < word.length; i++) {
  if (word[i] === '0') {
    currentChainLength0++;
    
    currentChainLength1 = 0;
  } else if (word[i] === '1') {
    currentChainLength1++;
    
    currentChainLength0 = 0;
  }
  
  if (currentChainLength0 > longestChainLength0) {
    longestChainLength0 = currentChainLength0;
  }
  
  if (currentChainLength1 > longestChainLength1) {
    longestChainLength1 = currentChainLength1;
  }
}

console.log("Longest chain length: " + Math.max(longestChainLength1, longestChainLength0));

