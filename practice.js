const input = "123abc45";
let sum = 0;

for (let i of input) {
  if (i == Number(i)) {
    sum = sum + Number(i);
  }
}
console.log(sum);
