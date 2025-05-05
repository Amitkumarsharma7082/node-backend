//! require
const express = require("express");

//! handler
const app = express();

app.get("/", (req, res) => {
  return res.send("Hello Home page");
});

app.get("/about", (req, res) => {
  return res.send(`Hello with name : ${req.query.name}`);
});

app.listen(8000, () => console.log("Server Started"));
