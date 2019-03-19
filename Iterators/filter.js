// filter basic understanding
function isBigEnough(value) {
    return value >= 10;
  }  
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
console.log(filtered)

// filter is imutable arrary
function isBigEnough1(value) {
    return value + 10;
  }  
var modFiltered = [12, 5, 8, 130, 44].filter(isBigEnough1);
// filtered is [12, 5, 8, 130, 44]
console.log(modFiltered)
