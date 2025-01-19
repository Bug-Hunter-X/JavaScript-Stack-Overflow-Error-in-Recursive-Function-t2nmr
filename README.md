# JavaScript Stack Overflow Error

This repository demonstrates a common error in JavaScript: a stack overflow error caused by an improperly implemented recursive function.

The `bug.js` file contains the faulty code, which recursively calls itself without a proper base case for large differences between the input values `a` and `b`. This results in a stack overflow error.

The `bugSolution.js` file provides a corrected version of the function that includes a proper base case, preventing the stack overflow.