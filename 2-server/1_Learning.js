//! 1. Access the server
const http = require("http");

//! handler function
function myHandler(req, res) {
  //! 5 >>>>
  if (req.url === "/favicon.ico") return res.end();
  const myUrl = url.parse(req.url, true); // true query parameter
  const log = `${Date.now()} : ${req.url} : New Request logs\n`;
  // http://localhost:8000/about?myName=Amit&userId=1
  console.log(myUrl);
  fs.appendFile("./log.txt", log, (err, result) => {
    switch (
      myUrl.pathname // /about
    ) {
      case "/":
        if (req.method === "GET") res.end("HomePage");
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
      case "/search":
        // http://localhost:8000/search?q=javascript+tic+tac+toe
        // + => space
        const search = myUrl.query.q;
        res.end(`Hey this result search for : ${search}`);
        break;
      case "/signup":
        if (req.method === "GET") res.end("This is get method from signup");
        else if (req.method === "POST") res.end("This is POST method");
        break;
      default:
        res.end("404 PAGE NOT FOUND");
    }
  });
}

//! 4. File system
const fs = require("fs");

//! 5. Url
const url = require("url");

//! 2. create a server
const myServer = http.createServer(myHandler);

//! 3. server listen/run - PORT
myServer.listen(8000, () => console.log("working fine...."));
