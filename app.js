const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

app.use(express.static(path.resolve(__dirname,'public')));

app.get('/',(req, res) => res.sendFile(path.resolve(__dirname,'views', 'home.html')));


app.listen(port, () => console.log(`Se levanto con exito el servidor en http://localhost:${port}`));