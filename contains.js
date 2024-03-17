function contains(obj, val) {
  // search for obbjects' value return true if matches

  if (typeof obj !== "object") {
    return obj === val;
  }
  for (var value of Object.values(obj)) {
    if (contains(value, val)) {
      return true;
    }
  }
  return false;
}

var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false
console.log(hasIt);
console.log(doesntHaveIt);
