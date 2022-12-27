const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

app.use(express.static(path.resolve(__dirname,'public')));

app.get('/',(req, res) => res.sendFile(path.resolve(__dirname,'views', 'home.html')));

app.get('/register', (req,res)=>{res.sendFile(path.join(__dirname, "views", "register.html"))})

app.get('/login', (req,res)=>{res.sendFile(path.join(__dirname, "views", "login.html"))})

app.listen(port, () => console.log(`Servidor levantado en http://localhost:${port}`));