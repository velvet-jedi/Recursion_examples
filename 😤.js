/*Write a function called all which accepts an array and a callback
and returns true if every value in the array returns true
when passed as parameter to the callback function
*/

function all(arr, cb, index = 0) {
  if (index === arr.length) {
    return true;
  }

  if (!cb(arr[index])) {
    return false;
  }

  return all(arr, cb, index + 1);
}

var allAreLessThanSeven = all([1, 2, 8], function (num) {
  return num < 7;
});
console.log(allAreLessThanSeven);
