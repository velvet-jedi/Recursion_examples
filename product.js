function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr.shift() * productOfArray(arr);
}

console.log(productOfArray([1, 2, 3]));
console.log(productOfArray([1, 2, 3, 10]));
