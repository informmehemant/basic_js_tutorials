//  /pattern/modifiers;
// simple expression

var str = "The best things in life are free 1 to 10";
var patt = /\d/g;
var res = str.match(patt);
console.log(res);

//  [abc] specific letter
var patt1 = /[abc]/g;
var res1 = str.match(patt1);
console.log(res1);

//  [^abc] not specific letters
var res2 = str.match(/[^abc]/g);
console.log(res2);