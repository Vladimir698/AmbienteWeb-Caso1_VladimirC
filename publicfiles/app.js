
        
        setTimeout(() => {
            fetchNotes();
        }, 100);

        async function fetchNotes() {
            try {
                const response = await fetch('/notas');
                if (!response.ok) {
                    throw new Error('Error al obtener las notas');
                }
                const notasHTML = await response.text(); // Convertir la respuesta a texto HTML
                const notesContainer = document.getElementById('notes-container');
                if (notesContainer) {
                    notesContainer.innerHTML = notasHTML; // Insertar las notas en el contenedor si existe
                } else {
                    console.error('Elemento notes-container no encontrado');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }


        // document.addEventListener('DOMContentLoaded', () => {
        //     const form = document.getElementById('guardar-nota');
            
        //     form.addEventListener('submit', async (event) => {
        //         event.preventDefault(); // Prevenir comportamiento predeterminado
        
        //         const title = document.getElementById('title').value;
        //         const content = document.getElementById('content').value;
        //         const tags = document.getElementById('tags').value;
        
        //         const newNote = {
        //             titulo: title,
        //             contenido: content,
        //             tags: tags
        //         };
        
        //         try {
        //             const response = await fetch('/notas', {
        //                 method: 'POST',
        //                 headers: {
        //                     'Content-Type': 'application/json'
        //                 },
        //                 body: JSON.stringify(newNote)
        //             });
        
        //             if (!response.ok) {
        //                 throw new Error('Error al crear la nota');
        //             }
        
        //             const createdNote = await response.json();
        //             console.log('Nota creada:', createdNote);
        
        //             // Redireccionar o mostrar un mensaje de éxito
        //             window.location.href = '/home.html';
        
        //         } catch (error) {
        //             console.error('Error:', error);
        //             alert('Hubo un error al crear la nota.');
        //         }
        //     });
        // });
        
