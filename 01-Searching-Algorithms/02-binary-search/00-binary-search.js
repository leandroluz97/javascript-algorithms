const list = [3, 5, 7, 9, 11, 12, 13, 16, 18, 19, 21];

function binarySearch(arr, start, end, num) {
  if (end >= start) {
    let mid = start + Math.floor((end - start) / 2);

    if (arr[mid] === num) return mid;

    if (arr[mid] > num) return binarySearch(arr, start, mid - 1, num);

    return binarySearch(arr, mid + 1, end, num);
  }
  return -1;
}

console.log(binarySearch(list, 0, list.length - 1, 21));
