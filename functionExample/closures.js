// first Class function
var myFunction = function() {
    console.log(' i have been called');
}
myFunction.firstName = 'Hemant';
console.log(myFunction);
// self executing function
// (function(){
//     var message = ['hello',' hi'];
//     for(var i in message) {
//         setTimeout(function() {
//             console.log(message[i]);
//         },10);
//     }  
// })();

(function(){
    var message = ['hello',' hi'];
    // capture context
    var say = function(index) { // establishes new scope its almost creating a new varible
        return function() {
            console.log(message[index]);
        };
    }
    for(var i in message) {
       setTimeout(say(i), 1000);
    }  
})();


var counter = 0;
function createCounter(x) { 
    return function() {
        return  counter + x;
    }
}
var c = createCounter(2);
console.log(c());

