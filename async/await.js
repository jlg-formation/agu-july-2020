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

(async () => {
  await appendFile("test.txt", "toto\n");
  await appendFile("test.txt", "toto\n");
  await appendFile("test.txt", "toto\n");
  await appendFile("test.txt", "toto\n");
})();
