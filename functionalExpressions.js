const product = function(a,b){return a*b;}
const division = function(a,b){return Math.floor(a/b)}
const sum = function(a,b){return a+b}
const difference = function(a,b){return a-b}

const operations = {
    multiply: product,
    divide: division,
    fold: sum,
    subtract: difference,
}
const calculate = (a,b,operation) => {
   return operation(a,b)
}

let selectedOperation = "multiply";
console.log(calculate(8,6,operations[selectedOperation]))
selectedOperation = "divide";
console.log(calculate(8,6,operations[selectedOperation]))
selectedOperation = "fold";
console.log(calculate(8,6,operations[selectedOperation]))
selectedOperation = "subtract";
console.log(calculate(8,6,operations[selectedOperation]))