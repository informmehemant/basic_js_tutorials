var promise1 = new Promise(function(resolve, reject) {
    // setTimeout(function() {
    //   resolve('foo');
    // }, 300);
    // another condition
    if(1 === '1') {
        resolve('got resolved')
    } else {
        reject('condition got rejected !!!!')
    }

  });
  
  promise1.then(function(value) {
    console.log(value);
    // expected output: "foo"
  },(err) => {
      console.log(err);
  });
  
   //console.log(promise1);
  // expected output: [object Promise]
  
  