// basic object discription
// Object initializer
var person = {
    name: 'Rahul',
    email: 'rahul123@gmail.com',
    address: {
        street: '24th main, norkil hotel',
        state: 'sikkim'
    },
    printDetail: function() {
        console.log(this.address);
    }
}
// access Objects
console.log(person.email);
console.log(person.address.state);
// accessing function too
console.log(person.printDetail());

// declaring using new key word
var person1 = new Object();
person1.name = 'Shivam saxena';

console.log(person1);


// constructor function

function car(name, company, color) {
  this.name = name;
  this.company = company;
  this.color = color;
}

var modelCar = new car('BMW-s20', 'BMW', 'royal blue');
console.log(modelCar.name);

//  Object.create() 
var Animal = {
    name: '',
    display: function() {
        console.log(this.name);
    }
};
var dog = Object.create(Animal);
dog.name = 'broonu';
dog.display()


