const fs = require('fs');

/* READ */
// It read the file in an asynchronous way
fs.readFile('./hello.txt', (err, data) => {
  if (err) {
    console.log('errooooorrr');
  }

  // In order to display data in the right format, we need to 
  // pass it to a string with a utf8 encoding, otherwise, we 
  // would display a Byte Buffer (showing the data in hex format)
  console.log('Async', data.toString('utf8'));
});

// It reads the file in a synchronous way
const file = fs.readFileSync('./hello.txt');
console.log('Sync', file.toString());

/* APPEND */
fs.appendFile('./hello.txt', 'This is so cool!', err => {
  if (err) {
    console.log(err);
  }
});

/* WRITE */
fs.writeFile('./bye.txt', 'Sad to see you go', err => {
  if (err) {
    console.log(err);
  }
});

/* DELETE (it has a tricky name) */
fs.unlink('./bye.txt', err => {
  if (err) {
    console.log(err);
  }
});
