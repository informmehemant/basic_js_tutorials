// variable hoisting
console.log(a);
var a;

// function hoisting
console.log(b());
function b() {
    console.log('b function is called!')
}
