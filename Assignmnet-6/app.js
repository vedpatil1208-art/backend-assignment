const express = require('express');
const apiRouter = require('./routes/apiRouter');

const app = express();
const PORT = 3000;

app.use('/api', apiRouter);

app.get('/', (req, res) => {
  res.send('Home Page - no router middleware here');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});