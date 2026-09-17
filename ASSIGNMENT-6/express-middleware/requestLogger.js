const express = require("express");

const app = express();

function getTimestamp() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url} ${getTimestamp()}`);
  next();
};

app.use(logger);

app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Us");
});

app.get("/contact", (req, res) => {
  res.send("Contact Information");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});