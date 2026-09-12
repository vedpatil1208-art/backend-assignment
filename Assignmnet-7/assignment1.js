const express = require("express");
const app = express();

app.get("/student/:id", (req, res) => {
  res.send(`Student ID: ${req.params.id}`);
});

app.listen(3000, () => {
  console.log("Assignment 1 server running on http://localhost:3000");
});