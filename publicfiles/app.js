

// Array para almacenar las notas 
var notas = JSON.parse(localStorage.getItem('notas')) || [];


function crearNota(event) {
    event.preventDefault();
    var title = document.getElementById('title').value;
    var content = document.getElementById('content').value;
    var tags = document.getElementById('tags').value;
    var creationDate = document.getElementById('creationDate').value;
    var nuevaNota = { title: title, content: content, tags: tags, creationDate: creationDate};
    notas.push(nuevaNota);
    localStorage.setItem('notas', JSON.stringify(notas));
    mostrarNotas();
}


document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', crearNota);
        mostrarNotas(); // Muestra las notas existentes
    } else{
        mostrarNotas();
    }
});

function mostrarNotas() {
    var notesContainer = document.getElementById('notesContainer');
    notesContainer.innerHTML = '';
    notas.forEach(function(nota) {
        var notaD = document.createElement('div');
        notaD.classList.add('nota');

        var titulo = document.createElement('h2');
        titulo.textContent = nota.title;
        notaD.appendChild(titulo);

        var contenido = document.createElement('p');
        contenido.textContent = nota.content;
        notaD.appendChild(contenido);

        var etiquetas = document.createElement('p');
        etiquetas.textContent = 'Etiquetas: ' + nota.tags;
        notaD.appendChild(etiquetas);

        var fechaCreacion = document.createElement('p');
        fechaCreacion.textContent = 'Fecha de Creación: ' + nota.creationDate;
        notaD.appendChild(fechaCreacion);

        notesContainer.appendChild(notaD);
    });
}



        
