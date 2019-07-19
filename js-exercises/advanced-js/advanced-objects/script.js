// Reference type -> Objects and array are both reference types
var object1 = {value: 10}
var object2 = object1;
var object3 = {value: 10};

console.log(object1 === object3); // false
console.log(object1 === object2); // true
console.log([] === []); // false because we are comparing 2 empty arrays but with different addresses

// Context vs Scope
// Context tells you where you are within the object
// Scope is created inside curly brackets (i.e. function, for loop, ...)

console.log(this);              // Will print the window object
console.log(this === window);   // true

function a() {
    console.log(this);      // window object
}

const object4 = {
    a: function() {
        console.log(this);  // a object
    }
}

// Instantiation
/*  The easiest explanation is, that the class syntax in Javascript is only syntactic sugar.
    There are no classes at all in Javascript. Everything in Javascript works with prototypal
    inheritance and Objects. */
class Player {
    constructor(name, type) {
        console.log('player', this);
        this.name = name;
        this.type = type;
    }
    
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);  // super must be at the first line of the constructor of a child class
        console.log('wizard', this);
    }

    play() {
        console.log(`WEEEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');
