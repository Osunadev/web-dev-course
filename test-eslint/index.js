const hello = 'hello';
let hi = 0;
const x = 1;
let obj = { 1: 'one', 2: 'two' };

let foo = 'foo';

if (foo === 'foo') console.log(`It's true`);

for (let i = 0; i < 10; i += 10) {
  console.log(i);
}

const obj2 = {
  info: 'hey',
  hello() {
    console.log('hello');
  },
  low: 'key'
};

class A {
  foo() {
    console.log(
      'Hello World'
    ); /* error Expected 'this' to be used by class method 'foo'. */
  }
}
