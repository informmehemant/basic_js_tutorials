// Basic Function 
function myFunc(theObject) {
    theObject.companyName = 'BMW';
}
  
var mycar = { companyName: 'Honda', model: 'BMW i8', Price: '2.62 crore'};
var x, y;
  
x = mycar.companyName; // x gets the value "Honda"
console.log(x)
myFunc(mycar);
y = mycar.companyName; // y gets the value "BMW"
console.log(y);

