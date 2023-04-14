const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to Home Page");
    return;
  }

  if (req.url === "/about") {
    res.end("Welcome to About Page");
    return;
  }

  if (req.url === "/contact") {
    res.end("Welcome to Contact page");
    return;
  }

  res.end("Error Page 404 Not Found !");
  return;
});

server.listen(7000);
