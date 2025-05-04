//! Require File System
const fs = require("fs");

//! write/create a file

//* 2 ways >>>>>>

// sync way :
// fs.writeFileSync("./contacts.txt", "Amit contact : +9170000000");

// async way :
// fs.writeFile("./test.txt", "hello async a file", (err) => {});

//! read a file

//* 2 ways >>>>

// Sync way :
// const res = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(res);

// Async way :
// fs.readFile("./contacts.txt", "utf-8", (err, res) => {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("Result : ", res);
//   }
// });

//! append/add in file

//* 2 ways >>>>

// sync
// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
// fs.appendFileSync("./test.txt", `${Date.now()} Hey there\n`);

// copy :
// fs.cpSync("./test.txt", "./copy.txt");

// delete/unlink
// fs.unlinkSync("./copy.txt");

// stat
console.log(fs.statSync("./test.txt"));

// mkdir
// fs.mkdirSync("my-docs/testCase", { recursive: true });
