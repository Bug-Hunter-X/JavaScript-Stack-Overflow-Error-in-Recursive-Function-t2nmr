function foo(a, b) {
  if (a === b) {
    return true;
  } else if (a > b) {
    return false;
  } else if (a + 1 > b) { // Added a check to prevent overflow
    return false;
  }
  return foo(a + 1, b);
}

console.log(foo(1, 5)); // This will now work correctly