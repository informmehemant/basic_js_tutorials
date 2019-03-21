// allows us to add methods to object, seperately
// call  allows us to attach multiple parameter 
var cart = { items: 1 };
var addCart = function(a, b) { // constructor based object
    return this.items + a + b;
}  

console.log(addCart.call(cart, 1, 2)); // return 4

//apply
console.log(addCart.apply(cart, [1,4])); // return 5

// returns  add cart
console.log(addCart.bind(cart, 2,9));

var a = addCart.bind(cart, 2,9);
console.log(a()); 