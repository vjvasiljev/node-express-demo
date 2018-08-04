const express = require ('express');

const app = express();

app.get('/', (req, res) => {
  res.send("Helllo");
})
app.listen(3000);