// Iterator in array

// ForEach
var arr = [1,2,3,4]; 
arr2 = [] 
arr.forEach(function(x){
    arr2.push(x * x);
})
console.log(arr2);

// map
var arr3 = arr.map(function(x){
   return x*x;
})
console.log(arr3);

//  With objects
// forEach
// What you have
var Person = [
    { id: 20, name: 'Hemant Singh' },
    { id: 24, name: 'Ashish Kumar' },
    { id: 56, name: 'Shivam ' },
    { id: 88, name: 'Amy Jackson' }
  ];
  // need to extract id's
  // [20, 24, 56, 88]
personsId = [];
Person.forEach(function(item){
   personsId.push(item.id);
});

console.log(personsId);
// with map
personIdMap = Person.map(function(item) {
     return item.id;
});

console.log(personIdMap);