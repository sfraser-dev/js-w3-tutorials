function factorial(num) {
  if (num === 0 || num === 1) {
    return num;
  }
  return num * factorial(num - 1);
}

console.log("Hello World!")
let n = factorial(8);
console.log(n); // 40320

