var a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: [30,40,50]

function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(sum(...numbers));
  // expected output: 6
  
  console.log(sum.apply(null, numbers));
  // expected output: 6
  


// Simple string substitution
var name = "Brendan";
console.log(`Yo, ${name}!`);
var a = 10;
var b = 10;
console.log(`JavaScript first appeared ${a+b} years ago. Crazy!`);
console.log(`The number of JS MVC frameworks is ${2 * (a + b)} and not ${10 * (a + b)}.`);