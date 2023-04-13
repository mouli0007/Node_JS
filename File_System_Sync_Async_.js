// FS => File System (SYNC) 

const { readFileSync, writeFileSync } = require("fs");

// Getting the file content !

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// Writting some content on a file
//  If the file is not there node js will create one
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result :${first},${second}`
);

writeFileSync(
  "./content/mouli-profile.txt",
  "Mouli VJ is a MERN Stack Developer !",

  // Flag : Will upend the content again
  {
    flag: "a",
  }
);


##########################################

// FS => FileSystem (ASYNC)

const { readFile, writeFile, read } = require("fs");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log("there is an error");
    return "there is an error";
  }

  const first = result;
  //   Reading a second file
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log("there is an error");
      return "there is an error";
    }

    const second = result;

    //   Writting a file

    writeFile(
      "./content/result-async.txt",
      `Here is the result of Async File System ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log("there is an error");
        }
        console.log(result);
        return "File Added Successfully";
      }
    );
  });
});




