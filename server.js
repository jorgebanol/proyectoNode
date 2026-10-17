const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('inicio', { titulo: "Página de Inicio" });
});

app.get('/servicios', (req, res) => {
    res.render('servicios', { titulo: "Nuestros Servicios" });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));