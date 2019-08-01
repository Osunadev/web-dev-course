const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// We can have multiple routes
app.get('/', (req, res) => {
  res.send('getting root');
});

app.get('/profile', (req, res) => {
  res.send('Success...');
});

app.post('/profile', (req, res) => {
  console.log(req.body);
});

app.listen(3000);
