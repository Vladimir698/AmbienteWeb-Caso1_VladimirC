const express = require('express');
const app = express();
const path = require('path');
const { v4: uuidv4 } = require('uuid'); //uuid es para generar IDs aleatorios
app.use(express.urlencoded({ extended: true }));

const PORT = 85;
const PUBLIC = path.join(__dirname,'publicfiles'); 
app.use(express.static(PUBLIC));
app.use(express.json());



// Array para almacenar las notas (simulando una base de datos en memoria)
let notas = [
    { id: uuidv4(), titulo: 'Nota 1', contenido: 'Contenido de la nota 1', fechaCreacion: new Date(), fechaModificacion: new Date() },
    { id: uuidv4(), titulo: 'Nota 2', contenido: 'Contenido de la nota 2', fechaCreacion: new Date(), fechaModificacion: new Date() },
    { id: uuidv4(), titulo: 'Nota 3', contenido: 'Contenido de la nota 3', fechaCreacion: new Date(), fechaModificacion: new Date() }
];

// Ruta para obtener todas las notas en formato HTML
app.get('/notas', (req, res) => {
    res.write('<h2  >Lista de Notas</h2>');  // Inicia la escritura de la respuesta

    // Itera sobre cada nota y escribe su contenido HTML
    notas.forEach(nota => {
        res.write(`<div><h2>${nota.titulo}</h2><p>${nota.contenido}</p></div>`);
    });

    res.end();  // Finaliza la respuesta
});

// Ruta para obtener una nota por su ID en formato HTML
app.get('/notas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const nota = notas.find(nota => nota.id === id);

    if (nota) {
        res.write(`<h2>${nota.titulo}</h2><p>${nota.contenido}</p>`);
    } 
    
    res.end();  // Finaliza la respuesta
});


// Ruta para crear una nueva nota
app.post('/notas', (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).send('Título y contenido son requeridos');
    }
    const nuevaNota = {
        id: uuidv4(),
        title,
        content
        // fechaCreacion: new Date(),
        // fechaModificacion: new Date()
    };
    notas.push(nuevaNota);
    res.status(201).json(nuevaNota);
});



// app.get('/create',(req,res) => {
//     console.log('Loading contact us...');
//     res.sendFile(path.join(PUBLIC,'create.html'))
// });

// app.post('/create', (req , res) => {
//     console.info('Contact Us has been called...\n');
//     const title = req.body.title;
//     const content = req.body.content;
//     const tags = req.body.tags;

//     console.log('Form data\n');
//     console.log('Title: ' + title);
//     console.log('Content: ' + content);
//     console.log('Tags ' + tags);

//     res.end();

// } );




app.listen(PORT, () => {
    console.info(`Server running at port ${PORT}`);
});