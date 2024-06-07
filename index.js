import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send("Hello World");
});

app.get('/saludo/valentin', (req, res) => {
  res.send("Hola Valentin");
});



app.listen(3000, () => {
  console.log("Example app listening on port 3000");
});
