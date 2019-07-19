// let, const -> NEW WAY OF DECLARING VARIABLES
const player = 'bobby';
let experience = 100;
let wizardLevel = false;

// var -> The only old way
var name = 'alex'

if (experience > 90) {
    var name = 'omar';
    let wizardLevel = true;     /*  with let, everytime it's wrapped with curly brackets it creates a new scope (remember that with var, we
                                    could only create a new scope inside a function, and not inside if statements, for example) */                 
    console.log('inside', wizardLevel);
    console.log('inside', name);
}

console.log('outside', wizardLevel);
console.log('outside', name);

////////////////////////////////////////////////////////////////
const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
}

obj = 5; // we can't do this because we are assigning a new value to our const variable
obj.player = 'omar'; // we can do this because we are modifying the value of our object key

// DESTRUCTURING
 const player = obj.player;
 const experience = obj.experience;
 let wizardLevel = obj.wizardLevel;

 const { player, experience } = obj;
 let { wizardLevel } = obj;

 // OBJECT PROPERTIES
 const name = 'john snow';
 const obj = {
     [name]: 'hello',
     [1+2]: 'hihi'
 }

 const a = "Simon";
 const b = true;
 const c = {};

 // instead of doing this
 const object = {
     a: a,
     b: b,
     c: c
 }
 // we can do this
 const object = { a, b, c }

 // TEMPLATE STRINGS
 const name = 'Sally';
 const age = 34;

// const greeting = "Hello " + name + " you seem to be "+(age-10)+".";
const greetingBest = `Hello ${name} you seem to be ${age-10}.`;

// DEFAULT ARGUMENTS
function greet(name='', age=30) {
    return `Hello ${name} you seem to be ${age-10}.`;
}

// SYMBOL -> Symbols are used because they create these unique types
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

console.log(sym2 === sym3); // false

// ARROW FUNCTIONS
// the old way (will be added to the window object)
function add(a, b) {
    return a+b;
}

// won't be added to the window object as a method
const add = (a,b) => a+b;