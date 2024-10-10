function telOp(arr) {
  let sum = 0;
  arr.forEach((el) => (sum += el));
  return sum;
}

console.log(telOp([5, 10, 15]));
