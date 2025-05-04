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
// console.log(fs.statSync("./test.txt"));

// mkdir
// fs.mkdirSync("my-docs/testCase", { recursive: true });

//! Lecture 6 : Node Js Architecture
// Blocking Request : (Sync)
// console.log("1");
// const res = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(res);
// console.log("2");
// Output : 1 , [Data], 2

// Non-Blocking Request : (Async)
console.log("1");
fs.readFile("./contacts.txt", "utf-8", (err, res) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log(res);
  }
});
console.log("2");

// Output : 1, 2, [Data]
