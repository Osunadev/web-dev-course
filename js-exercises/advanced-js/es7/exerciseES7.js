// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
console.log(dragons.includes('John'));  // false


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

if (dragons.filter(name => name.includes('John')).length > 0) {
    console.log(`There is at least one dragon with that includes "John"`);
} else {
    console.log(`There isn't a dragon containing the name "John"`);   
}

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const pow100 = (num, exp) => num**100;

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
//  +Infinity because is a large number that can't be represented in the range of Integer numbers

