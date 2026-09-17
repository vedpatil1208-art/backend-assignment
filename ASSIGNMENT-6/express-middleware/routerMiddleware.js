const express = require("express");

const app = express();
const router = express.Router();

function getTimestamp() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

const routerLogger = (req, res, next) => {
  console.log(`${req.method} ${req.originalUrl} ${getTimestamp()}`);
  next();
};

router.use(routerLogger);

router.get("/students", (req, res) => {
  res.send("Students List");
});

router.get("/courses", (req, res) => {
  res.send("Courses List");
});

router.get("/faculty", (req, res) => {
  res.send("Faculty List");
});

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Home Page (not logged by routerLogger)");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});