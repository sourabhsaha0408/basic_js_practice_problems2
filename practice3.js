const input = "The quick brown fox jumps over the lazy dog";
const smallCaseInput = input.toLowerCase();
const alphabets = "abcdefghijklmnopqrstuvwxyz";
let count = 0;

for (let i of alphabets) {
  if (smallCaseInput.indexOf(i) == -1) {
    console.log("not pangram");
    break;
  } else {
    count += 1;
  }
}

if (count == 26) {
  console.log("pangram");
}
