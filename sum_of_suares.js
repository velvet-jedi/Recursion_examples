function SumSquares(arr) {
  var val = 0;
  arr.forEach((element) => {
    if (typeof element !== "number") {
      val += SumSquares(element);
    } else {
      val += element * element;
    }
  });
  return val;
}

var l = [1, 2, 3];
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[1, 2], 3];
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]];
console.log(SumSquares(l)); // 1 = 1

l = [10, [[10], 10], [10]];
console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400
