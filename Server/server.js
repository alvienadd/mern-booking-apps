//import module
const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const app = express();
//connection to mongoDB
const connectDB = require("./database/db");

connectDB();

//setting cors dan morgan
app.use(cors());
app.use(logger("dev"));

app.get("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,Authorization,authorization,X-Requested-With"
  );
  res.header(
    "Cache-Control",
    "no-cache,private,no-store,must-revalidate,max-stale=0"
  );
  next();
});

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.put("/", (req, res) => {
  res.send("request put");
});

app.delete("/", (req, res) => {
  res.send("request delete");
});

app.post("/", (req, res) => {
  res.send("request post");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
