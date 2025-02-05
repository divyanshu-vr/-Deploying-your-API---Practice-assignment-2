require('dotenv').config();
const express = require('express');

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  if (process.env.IS_ADMIN === 'true') {
    res.json({ message: "Welcome, Admin!", data: ["Admin Data 1", "Admin Data 2"] });
  } else {
    res.json({ message: "Welcome, User!", data: ["User Data 1", "User Data 2"] });
  }
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});