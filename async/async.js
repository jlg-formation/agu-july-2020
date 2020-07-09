const fs = require("fs");

fs.appendFile("test.txt", "toto\n", (err) => {
  if (err) {
    console.log("err: ", err);
    return;
  }
  fs.appendFile("test.txt", "toto\n", (err2) => {
    if (err2) {
      console.log("err: ", err2);
      return;
    }
    fs.appendFile("test.txt", "toto\n", (err3) => {
      if (err3) {
        console.log("err: ", err3);
        return;
      }
      fs.appendFile("test.txt", "toto\n", (err4) => {
        if (err4) {
          console.log("err: ", err4);
          return;
        }
      });
    });
  });
});
