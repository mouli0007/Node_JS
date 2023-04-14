const { readFile, writeFile } = require("fs");


##################### Promise Way to Do Things #####################
// Promise Way of Doing things

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, result) => {
      if (err) {
        reject("Error Occured !");
      } else {
        resolve(result);
      }
    });

    return writeFile(
      path,
      "Mouli will get another big offer and so on...",
      (err, result) => {
        if (err) {
          reject("Error occured ! on Second file");
        } else {
          resolve(result);
        }
      }
    );
  });
};

getText("./content/mouli-profile.txt")
  .then((e) => console.log(e))
  .catch((e) => console.log(e));

##### Handleing the promise in async 

const start = async () => {
  try {
    const first = await getText("./content/mouli-profile.txt");
    console.log(first);
  } catch (err) {
    console.log("Eroor occured in your async file");
  }
};

start();


##################### Async Way to Do Things #####################


const { readFile, writeFile } = require("fs");
const util = require("util");

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    await writeFilePromise(
      "./content/mouli-profile.txt",
      "Mouli VJ is getting bigger and bigger ",
      {
        flag: "a",
      }
    );
    const first = await readFilePromise("./content/mouli-profile.txt", "utf8");
    console.log(first);
  } catch (err) {
    console.log("Eroor occured in your async file");
  }
};

start();
