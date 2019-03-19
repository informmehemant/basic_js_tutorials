var counter = 0;
function createCounter(x) { 
    return function() {
        return  counter + x;
    }
}
var c = createCounter(2);
console.log(c());