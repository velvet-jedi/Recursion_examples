// function fibs(n) {
//   var arr = [0, 1];

//   for (i = 1; i < n - 1; i++) {
//     arr.push(arr[i] + arr[i - 1]);
//   }

//   return arr;
// }

// console.log(fibs(8));

function fibsRec(n) {
  if (n <= 0) {
    return [];
  }
  if (n === 1) {
    return [0];
  }
  if (n === 2) {
    return [0, 1];
  }

  var prev = fibsRec(n - 1);
  var currentNum = prev[prev.length - 2] + prev[prev.length - 1];

  prev.push(currentNum);

  return prev;
}
console.log(fibsRec(8));
