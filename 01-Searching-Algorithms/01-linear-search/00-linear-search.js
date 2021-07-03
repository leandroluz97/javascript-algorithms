const sortedArray = [3, 5, 7, 9, 11, 12, 13, 16, 18, 19, 21];

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

console.log(linearSearch(sortedArray, 12));
