const express = require('express');
const app = express();
app.use(express.json());

//Route libros
const librosRouter = require('./routes/libros');

// importamos el middleware 
const errorHandler = require('./middlewares/error');

app.use('/libros', librosRouter);
app.use(errorHandler);

app.listen(3000, () => {
    console.log('servidor Iniciado');
})