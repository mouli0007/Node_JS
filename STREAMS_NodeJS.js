// Streams

// Writeable
// Readable
//  Duplex
// TrandForm

const { createReadStream } = require("fs");

const stream = createReadStream("./content/mouli-profile.txt", {
  //  HighWatermark controls the file size
  highWaterMark: 9000,

  encoding: "utf8",
});

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => {
  console.log(err);
});


// Stream with http module sending the file in browser as chunked files 

const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    const fileStream = fs.createReadStream(
      "./content/mouli-profile.txt",
      "utf-8"
    );

    fileStream.on("open", () => {
      fileStream.pipe(res);
    });

    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000);
