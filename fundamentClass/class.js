// class in ES6

// unnamed
let Rectangle = class {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  console.log(Rectangle.name);
  // output: "Rectangle"
  
  // named
  let square = class Square {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  console.log(square.name);
  // output: "Rectangle2"