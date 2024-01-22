//chatgpt assisted

const notesContainer = document.getElementById('notesDisplay');

// Function to render notes to the DOM
function renderNotes(notes) {
    notesContainer.innerHTML = '';
    notes.forEach(note => {
        const paragraph = document.createElement('p');
        paragraph.textContent = note.content;
        notesContainer.appendChild(paragraph);
    });
}

// Function to retrieve and display notes
function retrieveNotes() {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    renderNotes(savedNotes);
    updateLastRetrievedTime();
}

// Function to update the last retrieved time display
function updateLastRetrievedTime() {
    const now = new Date().toLocaleTimeString();
    document.getElementById('retrievalTime').textContent = `Last retrieved at: ${now}`;
}

// Retrieve and display notes every 2 seconds
setInterval(retrieveNotes, 2000);

// Initial retrieval
retrieveNotes();
