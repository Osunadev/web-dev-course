// Using Promises
movePlayer(100, 'Left')
    .then(() => movePlayer(400, 'Left'))
    .then(() => movePlayer(10, 'Right'))
    .then(() => movePlayer(330, 'Left'))

// Using async await (it's just syntactic sugar)
async function playerStart() {
    const firstMove = await movePlayer(100, 'Left');    // pause
    await movePlayer(400, 'Left');  // pause
    await movePlayer(10, 'Right');  // pause
    await movePlayer(330, 'Left');  // pause
}

/////// Using the fetch API with async await

async function fetchUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(resp);
    const data = await resp.json();
    console.log(data);
}

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

// The old way using Promises chaining
Promise.all(urls.map(url => {
    return fetch(url).then( resp => resp.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(() => console.log('error'))

// The new way using async await (looks cleaner)
const getData = async function() {
    // We need to use a try catch statement because we don't
    // have a .catch() with async await
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(url =>
            fetch(url).then(resp => resp.json())    
        ))

        console.log('users', users);
        console.log('posts', posts);
        console.log('albums', albums);
    } catch (err) {
        console.log('Ooops,', err);
    }
}