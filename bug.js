function foo(a, b) {
  if (a === null || b === null) {
    return null; //This line is intended to handle null values
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: null
console.log(foo(1, null)); // Output: null
console.log(foo(null, null)); // Output: null
console.log(foo(undefined,2)); //Output: NaN, this is a bug because it should be handled
console.log(foo(2,undefined)); //Output: NaN, this is a bug because it should be handled