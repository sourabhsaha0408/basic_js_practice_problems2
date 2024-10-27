//program for adding 24 + 2 = 26

const input = "a24b2c100d200";
let concatenatedNumbers = '';
let sum = 0;

for (let i of input) {
  if (i == Number(i)) {
    concatenatedNumbers += i;
  } else {
    concatenatedNumbers = Number(concatenatedNumbers);
    sum += concatenatedNumbers;
    concatenatedNumbers = 0;
  }
}

concatenatedNumbers = Number(concatenatedNumbers);
sum += concatenatedNumbers;

console.log(sum);
