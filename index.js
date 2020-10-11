/*
WELCOME TO ALLEN's BRANCH
*/

/* 
Goal:
Initialize a boilerplate ejs frontend framework
*/

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  res.send("<h2> Chico </h2>");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
