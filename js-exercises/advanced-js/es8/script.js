// String padding methods
'Turtle'.padStart(10);    // '    Turtle'
'Turtle'.padEnd(10);      // 'Turtle    ' 

// Trailing commas (makes things a little bit nicer, like when making changes on github repos)
const fun = (a,b,c,d,) => {
    console.log(a);
}

fun(1,2,3,4,);

// Object values, entries and keys
let obj = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Mr. Grinch'
}

//  KEYS
console.log(Object.keys(obj));  // We obtain an array of keys within our object
// This could be a way to iterate trough an object
Object.keys(obj).forEach((key, i)  => {
    console.log(key, obj[key]);
})

// VALUES
// Iterating trough an object more simply
Object.values(obj).forEach(value => {
    console.log(value);
});

// ENTRIES
Object.entries(obj).forEach(entry => {
    console.log(value);
});