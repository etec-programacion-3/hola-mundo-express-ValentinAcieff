const express  = require('express');
const app = express();
const port = 3000 ;

app.get('/:nombre',(req, res)=>{
  const nombre = req.params.nombre;
  res.send('Hola ${nombre}');
});

app.listen(port, () =>{
  console.log('El server se encuentra en http://localhost:${port}');
});
