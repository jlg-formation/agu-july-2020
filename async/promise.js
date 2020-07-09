const fs = require("fs");

function appendFile(file, content) {
  return new Promise((resolve, reject) => {
    fs.appendFile(file, content, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
}

appendFile("test.txt", "toto\n")
  .then(() => {
    return appendFile("test.txt", "toto\n");
  })
  .then(() => {
    return appendFile("test.txt", "toto\n");
  })
  .then(() => {
    return appendFile("test.txt", "toto\n");
  })
  .catch((err) => {
    console.log("err: ", err);
  });
