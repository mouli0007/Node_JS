
const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", ({ age }) => {
  console.log(`Data Recived and Event Emitted !`);
  console.log(age);
});

customEmitter.on("response", (name) => {
  console.log("Some other Logic here !");
  console.log(name);
});

customEmitter.emit("response", { name: "Mouli VJ", age: 25 });

const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  res.end("Welcome to my home page !");
});

server.listen(4000);
