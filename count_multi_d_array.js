function totalIntegers(arr, count = 0) {
  arr.forEach((element) => {
    if (typeof element === "number") {
      // console.log(element);
      count++;
    } else if (typeof element === "object") {
      count += totalIntegers(element); // account for return values in the count also
    }
  });
  return count;
}
// var seven = totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]); // 7
// console.log(seven);

var multi = [[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]];
console.log(totalIntegers(multi));
