// CLOSURE:
/* A function ran, the function executeed. It's never going to execute again.
   But it's going to remember that tere are references to those variables so the
   child scope always has access to the parent scope. */

// The function defined in the closure "reminds" the scope in which it was created.

const first = (greet) => {
    const second = () => {
        const name = 'bobby';
        alert(greet);   // The children has access to the parent scope but not viceversa
    }

    return second;  // We are returning a function
}

const newFunc = first('Hello');
newFunc();

/* Another Example: */
function makeSizer(size) {
    return function() {
      document.body.style.fontSize = size + 'px';
    };
  }
  
var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

// CURRYING:
/* The process of converting a function that takes multiples arguments
   into a function that takes one at a time */
const multiply = (a,b) => a * b;              // Just a normal multiplication function
const curriedMultiply = (a) => (b) => a * b;  // Using currying

const multiplyBy5 = curriedMultiply(5);
const multiplyBy10 = curriedMultiply(10);

console.log(multiplyBy5(5));
console.log(multiplyBy10(5));

// COMPOSE:
/*  It's similar like a composition of functions in math */
const compose = (f,g) => (a) => f(g(a));
const sum = (num) => num + 1;

compose(sum, sum)(5);   // 7

/* We should always aim for no side effects in our code, and functional
   purity (being always deterministic) */