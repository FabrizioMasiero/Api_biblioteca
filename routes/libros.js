const express = require('express');
const router = express.Router();

const libro = require('../models/Libro');

//rutas de libro

router.get('/', async(req, res) => {
    try{
        const libros = await Libro.find();
        res.json(libros);
    }catch(error){
        res.status(500).json({error: "Error al encontrar el libro"});
    }
});

// crear libro

router.post("/", async(req, res) => {
    try{
        const nuevoLibro = new Libro(req.body);
        await nuevoLibro.save();
        res.json(nuevoLibro)
    }catch(error){
        res.status(500).json({error: "Error al crear el libro"});
    }
});

//Actualizar libro

router.put("/:id", async(req, res) =>{
    try{
        const Libro = await Libro.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
        });
    }catch(error){
        res.status(500).json({error: "Error al actualizar el libro"});
    }
});

//Elimiar libro

router.delete("/:id", async(req, res) => {
    try{
        await Libro.findByIdAndUpdate(req.params.id);
        res.json({message: "libro eliminado"})
    }catch(error){
        res.status(500).json({error: "Error al eliminar el libro"});
    }
});

module.exports = router;