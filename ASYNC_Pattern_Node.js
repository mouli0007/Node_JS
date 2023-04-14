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


##################### Async Way to Do Things #####################
