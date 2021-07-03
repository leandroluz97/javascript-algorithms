let arr = [10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 24, 33, 35, 42, 47];

function interpolationSearch(arr, lo, hi, x) {
  let pos;

  if (lo <= hi && x >= arr[lo] && x <= arr[hi]) {
    pos = lo + Math.floor(((hi - lo) / (arr[hi] - arr[lo])) * (x - arr[lo]));

    //conditiong of target found
    if (arr[pos] == x) return pos;

    //if x is larger, x is in rigth sub array
    if (arr[pos] < x) return interpolationSearch(arr, pos + 1, hi, x);

    //if x is smaller, x is in left sub array
    if (arr[pos] > x) return interpolationSearch(arr, lo, pos - 1, x);
  }

  return -1;
}

console.log(interpolationSearch(arr, 0, arr.length - 1, 18));
