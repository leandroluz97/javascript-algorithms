function binarySearch(arr, start, end, num) {
  if (end >= start) {
    let mid = start + Math.floor((end - start) / 2);

    if (arr[mid] === num) return mid;

    if (arr[mid] > num) return binarySearch(arr, start, mid - 1, num);

    return binarySearch(arr, mid + 1, end, num);
  }
  return -1;
}

function exponentialSearch(arr, len, num) {
  //if x is present at
  //first location itself
  if (arr[0] == num) {
    return 0;
  }

  //Find range for binary search
  //by repeated doubling

  let i = 1;
  while (i < len && arr[i] <= num) i = i * 2;

  return binarySearch(arr, i / 2, Math.min(i, len - 1), num);
}

let arr = [2, 3, 4, 10, 40];

console.log(exponentialSearch(arr, arr.length, 10));
