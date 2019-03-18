// Function parameters 
// 1. default 

function multiply(a, b) {
    b = typeof b !== 'undefined' ?  b : 1;
  
    return a * b;
  }
  
multiply(5); // 5

// 2. rest
  // add one the restArr items


  function multiply(multiplier, ...theArgs) {
    return theArgs.map(x => multiplier * x);
  }
  
  var arr = multiply(2, 1, 2, 3);
  console.log(arr); // [2, 4, 6]