//1. this is how most of javascript codes are executed which are present 
// in a file or in entire project.
console.log('hello World');

//4. Read file(theory.md) here using fs module and console the results of operation.

//6. Blocking code
 // Run it first and observe the output
//  var file = fs.readFileSync('./theory.md');
//  console.log(file);
//  console.log('run me first');
 
 // change it to run it in non-blocking manner.
 // Observe the difference in blocking and non-blocking code.

//  const fs = require('fs');
//  fs.readFile('./theory.md', (err, data) => {
//    if(err) {
//      throw err;
//    }else {
//      console.log(data.toString());
//    }
//  })

// 10. require math.js
  // console const pie and add and multiply function.

// const pie = 3.14;
// function sum(a, b) {
//   return a + b;
// }
// function multiply() {
//   return a * b;
// }
// // export it from math.js

// module.exports = {
//   sum,
//   multiply
// }

