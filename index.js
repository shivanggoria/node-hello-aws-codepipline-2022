const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello from Shivang!, This is v2 of websitge for testting, \n THANKS\n'
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
