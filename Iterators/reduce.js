const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10
// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

var developer = [
    {
      id: 10,
      name: "hemant Singh",
      years: 2.6,
    },
    {
      id: 2,
      name: "Raj Malhota",
      years: 10,
    },
    {
      id: 41,
      name: "Shivam",
      years: 6,
    },
    {
      id: 99,
      name: "Ello Asty",
      years: 22,
    }
  ];

  var totalYears = developer.reduce(function (accumulator, dev) {
    return accumulator + dev.years;
  }, 0); // intial value can be set , but default is 0;

  console.log(totalYears);