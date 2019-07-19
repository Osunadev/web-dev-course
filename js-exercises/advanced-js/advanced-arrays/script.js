const array = [1, 2, 10, 16];

const double = []
// We need to do this because forEach only loops for each element of the
// array and doesn't modify the original array, but doesn't return a new array too.
const newArray = array.forEach(num => {
    double.push(num + 2);
})

console.log('forEach', double);

// MAP
const mapArray = array.map(num => num * 2);
console.log('map', mapArray);

// FILTER
const filterArray = array.filter(num => num > 2); // We must provide a condition to filter the elements of the array
console.log(filterArray);

// REDUCE
const reduceArray = array.reduce((acc, num) => {
    return acc + num;
}, 0);  // If we don't specify the starting value of the acc, it will start with the value
// of the first element
console.log('reduce', reduceArray);