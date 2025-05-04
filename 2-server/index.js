//! 1. Access the server
const http = require("http");

//! 4. File system
const fs = require("fs");

//! 2. create a server
const myServer = http.createServer((req, res) => {
  fs.appendFile(
    "./log.txt",
    `${Date.now()} : ${req.url} : New Request\n`,
    (err, result) => {
      switch (req.url) {
        case "/":
          res.end("HomePage");
          break;
        case "/about":
          res.end("I am Amit");
          break;
        default:
          res.end("404 PAGE NOT FOUND");
      }
    }
  );
});

//! 3. server listen/run - PORT
myServer.listen(8000, () => console.log("working fine...."));
