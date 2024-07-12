const express = require('express');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 85;
const PUBLIC = path.join(__dirname,'publicfiles'); 


app.use(express.static(PUBLIC));
app.use(express.json());


app.get('/', (req,res) => {
    res.sendFile(path.join(PUBLIC,'home.html'));
});


// Array para guardar las notas
let notas = [];

app.post('/api/notas', (req, res) => {
    const { title, content, tags } = req.body;
    if (!title || !content || title.length > 200 || (tags && tags.some(tag => tag.length > 100))) {
        return res.status(400).send('Invalid input');
    }
    const note = {
        id: uuidv4(),
        title,
        content,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: tags || []
    };
    notes.push(note);
    res.status(201).send(note);
});



app.listen(PORT, () => {
    console.info(`Server running at port ${PORT}`);
});