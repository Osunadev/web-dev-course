const basket = ['apples', 'oranges', 'grapes'];
const str = 'Hello';

/* THE OLD WAY */

//1
for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
}
  
//2
basket.forEach(item => {
console.log(item);
})

/* NEW FEATURES OF ES6*/

// for of (it's similar to a forEach in java)
// Iterating - arrays, strings

for(item of basket) {
    console.log(item);
}

for(char of str) {
    console.log(char);
}

// for in - allows us to see the properties of an object
// Enumerating - objects
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}

for(item in detailedBasket) {
    console.log(item);
}

// What if we use for in with arrays, and for of with objects?

// Here will have an error because detailedBasket is not iterable
for(item of detailedBasket) {
    console.log(item);
}

// It will work 'cause array in JS are objects under the hood
// but it'll only print the indexes of each property/key

/*  We can think of arrays like this:

    basket = {
        0: 'apples',
        1: 'oranges',
        2: 'grapes'
    }
*/

for(item in basket) {
    console.log(item);
}