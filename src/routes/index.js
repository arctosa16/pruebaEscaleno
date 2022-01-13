const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/', (req, res) => {
    res.render('index.html', { title:'Test Escaleno'});
});

router.get('/CantidadRazas', (req, res) => {
    res.render('CantidadRazas.html', { title: 'Cantidad de razas' });
});

router.get('/imgRazas', async (req, res) => {
    let data = null;
    await fetch(`https://dog.ceo/api/breed/${req.query.raza}/images`)
        .then((respuesta) => {
            return respuesta.json()
        }).then((resp) => {
            data = resp;
            console.log('test',resp);
        })
    let img = data.message[0];    

    res.render('imgRazas.html', { title: `Ver ${req.query.raza}`, img: img });
});


router.get('/ListaRazas', async (req, res) => {
let data = null;
    await fetch("https://dog.ceo/api/breeds/list/all")
        .then((respuesta) => {
            return respuesta.json()
        }).then((resp) => {
            data = resp;
            console.log('test',resp);
        })
        

    res.render('ListaRazas.html', { title: 'Lista de perros por Razas', data: data });
});


module.exports = router;