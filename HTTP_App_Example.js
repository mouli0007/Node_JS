HTTP App Example, How we should render an application with node js, First we have to get all the files related to the application
and we have to provide it to the browser server !

//  HTTP Basics again

const http = require("http");
const { readFileSync } = require("fs");

// Get All Files !

const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeImage = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.write(homePage);
    res.end();
  }

  // About Page !
  else if (req.url === "/about") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.write("<h1>About Page</h1>");
    res.end();
  }

  // Styles
  else if (req.url === "/styles.css") {
    res.writeHead(200, {
      "content-type": "text/css",
    });
    res.write(homeStyles);
    res.end();
  }
  // Image / logo
  else if (req.url === "/logo.svg") {
    res.writeHead(200, {
      "content-type": "image/svg+xml",
    });
    res.write(homeImage);
    res.end();
  }

  // JavaScript !
  else if (req.url === "/browser-app.js") {
    res.writeHead(200, {
      "content-type": "text/javascript",
    });
    res.write(homeLogic);
    res.end();
  }
  // 404
  else {
    res.writeHead(404, {
      "content-type": "text/html",
    });
    res.write(`<h1>Error Page</h1>`);
    res.end();
  }
});

server.listen(5000);
