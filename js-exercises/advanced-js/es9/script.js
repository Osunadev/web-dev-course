// OBJECT SPREAD OPERATOR (like when we had array spead operator from ES6)
/*  The object spread operator worked in react before ES9 came out because 
    create-react-app was using object spread operator by default even though
    it wasn't officially part of JS, because it was so useful */
const animals = {
  tiger: 23,
  lion: 5,
  monkey: 2,
  bird: 40
};

function objectSpread(p1, p2, p3) {
  console.log(p1);
  console.log(p2);
  console.log(p3);
}

const { tiger, lion, ...rest } = animals; // rest = { monkey: 2, bird: 40 }

objectSpread(tiger, lion, rest);

// FINALLY
// This finally block will be called regardless of whether .then()
// works or the promise airs and catches into an error. finally it's
// gonna be called whether it resolves or rejects and does something
// that we tell it
const urls = [
  "https://swapi.co/api/people/1",
  "https://swapi.co/api/people/2",
  "https://swapi.co/api/people/3",
  "https://swapi.co/api/people/4"
];

Promise.all(urls.map(url => fetch(url).then(people => people.json())))
  .then(array => {
    throw Error;
    console.log("1", array[0]);
    console.log("2", array[1]);
    console.log("3", array[2]);
    console.log("4", array[3]);
  })
  .catch(err => console.log("ughhhh fix it!", err))
  .finally(() => console.log("extra"));

// FOR AWAIT OF
// It allows us to loop through our async calls if we have multiple of them just like
// we are able using the for of loop

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums"
];

const getData = async function() {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map(async function(url) {
        const response = await fetch(url);
        return response.json();
      })
    );
    console.log("users", users);
    console.log("posta", posts);
    console.log("albums", albums);
  } catch (err) {
    console.log("ooooooops", err);
  }
};

const getData2 = async function() {
  const arrayOfPromises = urls.map(url => fetch(url));
  for await (let request of arrayOfPromises) {
    const data = await request.json();
    console.log(data);
  }
};
