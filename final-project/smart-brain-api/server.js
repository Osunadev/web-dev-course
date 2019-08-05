const express = require('express');
const bodyParser = require('body-parser');
const bcryptjs = require('bcryptjs');
const cors = require('cors');
const knex = require('knex');

// We're just runnng the knex config function
const db = knex({
  client: 'pg',
  connection: {
    // localhost
    host: '127.0.0.1',
    user: 'omar',
    password: 'omar1234',
    database: 'smart-brain'
  }
});

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, resp) => {
  resp.send(database.users);
});

app.post('/signin', (req, res) => {
  const { email, password } = req.body;

  db.select('email', 'hash')
    .from('login')
    .where('email', '=', email)
    .then(data => {
      const isValid = bcryptjs.compareSync(password, data[0].hash);

      if (isValid) {
        return db
          .select('*')
          .from('users')
          .where('email', '=', email)
          .then(user => {
            res.json(user[0]);
          })
          .catch(err => res.status(400).json('unable to get user'));
      } else {
        res.status(400).json('wrong credentials');
      }
    })
    .catch(err => res.status(400).json('wrong credentials'));
});

// Always remember to respond in order to not hang out waiting the user when accessing
// to our server endpoint
app.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  const hash = bcryptjs.hashSync(password);

  // Making a transaction to avoid inconsistencies
  // This transaction is probably the trickiest part to get use to it
  db.transaction(trx => {
    trx
      .insert({
        hash: hash,
        email: email
      })
      .into('login')
      .returning('email')
      .then(loginEmail => {
        return (
          // returning('*'): We can do this instead of doing another select statement
          // This says insert the user in our users table and return all the columns
          trx('users')
            .returning('*')
            .insert({
              email: loginEmail[0],
              name: name,
              joined: new Date()
            })
            .then(user => {
              // We are not returning an array
              res.json(user[0]);
            })
        );
      })
      .then(trx.commit)
      .catch(trx.rollback);
  }).catch(err => res.status(400).json('unable to register'));
});

app.get('/profile/:id', (req, res) => {
  const { id } = req.params;
  let found = false;

  db.select('*')
    .from('users')
    // where receives and object with the value we want to filter
    .where({ id })
    .then(user => {
      // If the array is not empty it means that it return a user
      if (user.length) {
        res.json(user[0]);
      } else {
        res.status(400).json('Not found');
      }
    })
    .catch(err => res.status(400).json('error getting user'));
});

// Is the same thing as using POST, it would work the same if we
// decided to use POST but we are following the standards
app.put('/image', (req, res) => {
  const { id } = req.body;

  db('users')
    .where('id', '=', id)
    .increment('entries', 1)
    .returning('entries')
    .then(entries => {
      res.json(entries[0]);
    })
    .catch(err => res.status(400).json('unable to get entries'));
});

app.listen(8080, () => {
  console.log('app is runningon port 8080');
});
