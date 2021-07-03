const arrOfNumbers = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610,
];

// 0, 1, 1, 2, '3', 5, 8, 13, '21', 34, 55, 89, '144', 233, 377, 610,

function jumpSearch(arr, x, len) {
  let step = Math.floor(Math.sqrt(len));

  let prev = 0;

  while (arr[Math.min(step, len) - 1] < x) {
    console.log(prev, step);
    prev = step;
    step += Math.floor(Math.sqrt(len));
    if (prev >= len) {
      return -1;
    }
    console.log(prev, step);
  }

  while (arr[prev] < x) {
    prev++;
    if (prev == Math.min(step, len)) return -1;
  }

  if (arr[prev] == x) return prev;

  return -1;
}
console.log(jumpSearch(arrOfNumbers, 34, arrOfNumbers.length));

/*
function jumpSearch(arr, x) {
  if (x < 0) return false;

  const len = arr.length;
  let step = Math.sqrt(len);

  let i = 0;
  let jump = 0;

  while (jump <= len) {
    if (arr[jump] === x) return jump;

    if (arr[jump] > x) {
      jump -= step;
      step -= 1;
    }

    if (jump + step > len) {
      continue;
    }

    jump += step;
    i++;
  }

  return false;
}

console.log(jumpSearch(arrOfNumbers, 377));
*/
