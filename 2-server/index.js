//! 1. Access the server
const http = require("http");

//! 4. File system
const fs = require("fs");

//! 5. Url
const url = require("url");

//! 2. create a server
const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const myUrl = url.parse(req.url, true); // true query parameter
  // http://localhost:8000/about?myName=Amit&userId=1
  console.log(myUrl);
  fs.appendFile(
    "./log.txt",
    `${Date.now()} : ${req.url} : New Request\n`,
    (err, result) => {
      switch (myUrl.pathname) {
        case "/":
          res.end("HomePage");
          break;
        case "/about":
          // http://localhost:8000/about?myName=Amit
          const userName = myUrl.query.myName;
          res.end(`Hi ${userName}`);
          break;
        case "/users":
          // http://localhost:8000/users?users=Amit
          const users = myUrl.query.users;
          res.end(`Hello from users : ${users}`);
          break;
        default:
          res.end("404 PAGE NOT FOUND");
      }
    }
  );
});

//! 3. server listen/run - PORT
myServer.listen(8000, () => console.log("working fine...."));
