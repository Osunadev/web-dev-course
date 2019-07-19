// Primitive types are passed by value
var a = 5;
var b = a;
b++;
console.log(a); // 5
console.log(b); // 6

// Objects and Arrays are passed by reference
var c = [1, 2, 3, 4, 5];
var d = c;
d.push(1431234);

console.log(d); // [1,2,3,4,1431234]
console.log(c); // [1,2,3,4,1431234]

// If we want to create a copy of an ARRAY and assign it to a new one,
// we should do the following:
var originArray = [2, 4, 6, 8];
var copyArray = [].concat(originArray);

copyArray.push(10);
console.log(copyArray); // [2, 4, 6, 8, 10]
console.log(originArray); // [2, 4, 6, 8]

/* MAKING A SHALLOW CLONE (only the 1rst level) */
// Copy one object without having reference troubles
let obj = { a: "a", b: "b", c: "c" };
let clone = Object.assign({}, obj);
/* Another way to do it is using the spread operator */
let clone2 = { ...obj };

obj.c = 5;
console.log(obj);
console.log(clone); // The clone object won't be affected
console.log(clone2); //

// The problem is when we make a copy of an object that contains
// several objects as value pairs
let obj2 = {
  a: "a",
  b: "b",
  c: {
    text: "Hello"
  }
};

let obj2Clone = Object.assign({}, obj2);
let obj2Clone2 = { ...obj2 };

obj2.c.text = "Bye";
console.log(obj2); // They will have the same output
console.log(obj2Clone); //
console.log(obj2Clone2); //

// THE SOLUTION IS MAKING A DEEP CLONE
// You won't see this out in the wild to much because if we are
// deep cloning a huge object, it might take a long time to deep clone it
let obj3 = {
  a: "a",
  b: "b",
  c: {
    text: "Hello"
  }
};

let cloneObj3 = JSON.parse(JSON.stringify(obj3));

obj3.c.text = "Bye";
console.log(obj3);
console.log(cloneObj3);
