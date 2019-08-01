const express = require('express');
const bodyParser = require('body-parser');
const bcryptjs = require('bcryptjs');
const cors = require('cors');

const app = express();

// Fake data before we learn how to use databases

// If we didn't have a database, we would need to loop through this whole array
// and imagine if the array gets bigger and bigger, the time for searching for an
// specific value like password would take too much.
const database = {
  users: [
    {
      id: '123',
      name: 'John',
      email: 'john@gmail.com',
      password: 'cookies',
      entries: 0,
      joined: new Date()
    },
    {
      id: '124',
      name: 'Sally',
      email: 'sally@gmail.com',
      password: 'bananas',
      entries: 0,
      joined: new Date()
    }
  ]
};

app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, resp) => {
  resp.send(database.users);
});

app.post('/signin', (req, res) => {
  /*bcryptjs.compare(
    'apples',
    '$2a$08$.EO8ZHWHYdG79LKvOFK.yez7P/tbWG0dG/g8h/YbLzhGLSZSJDleS',
    function(err, res) {
      console.log('first guess', res);
    }
  );
  bcryptjs.compare(
    'veggies',
    '$2a$08$.EO8ZHWHYdG79LKvOFK.yez7P/tbWG0dG/g8h/YbLzhGLSZSJDleS',
    function(err, res) {
      console.log('second guess', res);
    }
  );*/
  if (
    req.body.email === database.users[0].email &&
    req.body.password == database.users[0].password
  ) {
    res.json(database.users[0]);
  } else {
    res.status(400).json('error logging in');
  }
});

// Always remember to respond in order to not hang out waiting the user when accessing
// to our server endpoint
app.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  bcryptjs.hash(password, 10, (err, hash) => {
    console.log(hash);
  });

  database.users.push({
    id: '125',
    name: name,
    email: email,
    entries: 0,
    joined: new Date()
  });

  res.json(database.users[database.users.length - 1]);
});

app.get('/profile/:id', (req, res) => {
  const { id } = req.params;
  let found = false;

  // The thing is that with forEach, it will return a value in it's own scope
  // until it iterates through the whole array
  database.users.forEach(user => {
    if (user.id === id) {
      found = true;
      return res.json(user);
    }
  });

  if (!found) {
    res.status(400).json('Not found');
  }
});

// Is the same thing as using POST, it would work the same if we
// decided to use POST but we are following the standards
app.put('/image', (req, res) => {
  const { id } = req.body;
  let found = false;

  database.users.forEach(user => {
    if (user.id === id) {
      found = true;
      user.entries++;
      return res.json(user.entries);
    }
  });

  if (!found) {
    res.status(400).json('Not found');
  }
});

app.listen(8080, () => {
  console.log('app is runningon port 8080');
});
