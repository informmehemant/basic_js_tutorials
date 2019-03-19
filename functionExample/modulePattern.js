// module patter
var Alert = (function(){
    var message = []; // private variable
    return {
        add: function(val) {
          message.push(val);
        },
        log: function() {
            console.log(message);
        }
    };  
})();

console.log(Alert);
Alert.add('Hi');
Alert.add('Here');
Alert.log();