# Algorithms Javascript - Searching and Sorting

Implementation of Searching and Sorting algorithms in Javascript.

## Index 📌

- Searching Algorithms
- Sorting Algorithms

## Linear Search 🔎

Knowing that our array are already sorted,
I started creating two points, the leftmost (start) and the rightmost (end).
While START its smaller or equal END, check if START index of array
is equal to num return true. If not check if END index of array is equal to num return true, other wise
didn't found the searched num.

```js
function linearSearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;

  for (start = 0; start <= end; ) {
    if (arr[start] === num) {
      return `find it from start at index ${start}`;
    }

    if (arr[end] === num) {
      return `find it from end at index ${end}`;
    }

    end--;
    start++;
  }

  return "did'nt find it 🤯🤯 ";
}
```

## Binary Search 🔢

While END(length) is greater or equal to start(smallest index).
I started dividing the array in order to get the lowest mid
then I checked if mid index of array is equal to num return true.
Next step was checking if mid index of array is greater or smaller than num,
in case one of them condition is right use recursion to call our function.

```js
function binarySearch(arr, start, end, num) {
  if (end >= start) {
    let mid = start + Math.floor((end - start) / 2);

    if (arr[mid] === num) return mid;

    if (arr[mid] > num) return binarySearch(arr, start, mid - 1, num);

    return binarySearch(arr, mid + 1, end, num);
  }
  return -1;
}
```
