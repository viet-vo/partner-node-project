/*
WELCOME TO ALLEN's BRANCH
*/

/* 
Goal:
Initialize a boilerplate frontend framework
*/

const express = require("express");
const app = express();
const routes = require("./routes");
// Look into Pug https://scriptverse.academy/tutorials/nodejs-express-pug.html
const port = 3000;

app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
