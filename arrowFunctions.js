const myFilter = (arr, filter) => {
    const output = []
    arr.map(el => filter(el) ? output.push(el) : '')
    return output;
}

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = myFilter(numbers, function (num) {
    return num % 2 === 0;
});

console.log(evenNumbers);

const greaterThanThree = myFilter(numbers, function (num) {
    return num > 3;
});

console.log(greaterThanThree); 