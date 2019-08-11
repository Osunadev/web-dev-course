const express = require('express');
const bodyParser = require('body-parser');
const bcryptjs = require('bcryptjs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

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

// We're making use of dependency injection

/**
 * We're using currying, because our functions will get the (req, res) parameters by default
 * If we stay with the more explicit approach, it'll look like this:
 *
 * app.post('/signin', (req, res) => { signin.handleSignIn(req, res, db, bcryptjs)})
 *
 * We need to have in mind that this explicit approach would work only if our handleSignIn function
 * is not implemented as a curry
 */
app.post('/signin', signin.handleSignIn(db, bcryptjs));
app.post('/register', register.handleRegister(db, bcryptjs));
app.get('/profile/:id', profile.handleProfileGet(db));
app.post('/imageurl', image.handleApiCall);

// Is the same thing as using POST, it would work the same if we
// decided to use POST but we are following the standards
app.put('/image', image.handleImageEntry(db));

app.listen(8080, () => {
  console.log('app is runningon port 8080');
});
