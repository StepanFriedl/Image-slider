const express = require ('express');
const app = express ();
const port = 3000;
app.set ('view engine', 'ejs');
app.use (express.static ('images'));
app.get ('/', function (req, res) {
  res.sendFile (__dirname + '/index.html');
  console.log (__dirname + '/index.html');
});
app.listen (port, () => {
  console.log (`Listenin on port: ${port}`);
});
