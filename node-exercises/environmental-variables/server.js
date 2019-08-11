const http = require('http');

const app = http.createServer((req, res) => res.send('oh hi there!'));

// By convention PORT is capitalized
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
