// adding a property

var person = function(name, email) {
   this.name = name;
   this.email = email;
}

person.prototype.details = function() {
   return this.name +" "+ this.email;
}
// access Objects
var a = new person('hemant','hemant@gmail.com')
console.log(a.email);
console.log(a.details());
