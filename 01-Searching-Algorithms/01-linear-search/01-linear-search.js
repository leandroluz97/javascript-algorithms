function getMissingNumber(arr) {
  let n = arr.length;

  let i;
  let total = 1;

  for (let i = 2; i <= n + 1; i++) {
    total += i;
    total -= arr[i - 2];
  }

  return total;
}

console.log(getMissingNumber([1, 2, 4, 5, 6]));
