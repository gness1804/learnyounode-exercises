const input = process.argv;
const nums = input.slice(2);
const parsedNums = nums.map((n) => {
  return parseFloat(n, 10);
});
const result = parsedNums.reduce((a, b) => {
  return a + b;
});
console.log(result)
