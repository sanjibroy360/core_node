const pie = 3.14;

function sum(a, b) {
  return a + b;
}
function multiply() {
  return a * b;
}

module.exports = {
  pie,
  sum,
  multiply
}

module.exports = {
    pie: 3.14,
    add: (a, b) => a + b ,
    multiply : (a, b) => a * b
}

exports.pie = 3.14;
exports.sum = (a, b) => a + b;
exports.multiply = (a, b) => a * b;