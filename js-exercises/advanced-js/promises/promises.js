const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Stuff Worked');
    } else {
        reject('Error, it broke');
    }
});

// This is chaining, the result of a then, is going to be passed to
// the next then

// the catch executes when an error occurs.
// .catch catches any errors that may happen between the chains
// .catch only works to catch an error that happens in the chains before the .catch
promise
    .then(result => {
        // throw Error
        return result + '!'
    })
    .then(result2 => result2 + '?')
    .catch(() => console.log('errroooor!')) 
    .then(result3 => {
        throw Error;
        console.log(result3 + '!');
    })

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'HIII')
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'POOKIE')
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Is it me you are looking for?')
})

// Promise.all takes an array of Promises
// It waits until all the promises have been resolved
Promise.all([promise, promise2, promise3, promise4])
    .then(values => {
        console.log(values);
    })

////////////////////////////////////////////////////
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
    return fetch(url).then( resp => resp.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(() => console.log('error'))