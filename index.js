const http = require('node:http');

function getGreeting(name = 'World') {
  return `Hello, ${name}!`;
}

function createServer() {
  return http.createServer((req, res) => {
    if (req.url === '/health') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ status: 'ok' }));
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(getGreeting());
  });
}

if (require.main === module) {
  const port = process.env.PORT || 3000;
  createServer().listen(port, '0.0.0.0', () => {
    console.log(`Listening on ${port}`);
  });
}

module.exports = { getGreeting, createServer };
