// basic object discription
// json way
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
