//chatgpt assisted

class Note {
    constructor(content) {
        this.content = content;
    }
}

const notesContainer = document.getElementById('noteSection');
const addNoteBtn = document.getElementById('addNoteBtn');
let notes = [];

// Load existing notes from localStorage
window.onload = function() {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    notes = savedNotes.map(note => new Note(note.content));
    renderNotes();
    updateLastSavedTime();
};

// Function to render notes to the DOM
function renderNotes() {
    notesContainer.innerHTML = '';
    notes.forEach((note, index) => {
        const textArea = document.createElement('textarea');
        textArea.value = note.content;
        textArea.addEventListener('input', (e) => {
            notes[index].content = e.target.value;
            saveNotes();
        });

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', () => {
            removeNote(index);
        });

        notesContainer.appendChild(textArea);
        notesContainer.appendChild(removeBtn);
    });
}

// Function to add a new note
addNoteBtn.addEventListener('click', () => {
    notes.push(new Note(''));
    renderNotes();
});

// Function to remove a note
function removeNote(index) {
    notes.splice(index, 1);
    renderNotes();
    saveNotes();
}

// Function to save notes to localStorage
function saveNotes() {
    localStorage.setItem('notes', JSON.stringify(notes));
    updateLastSavedTime();
}

// Function to update the last saved time display
function updateLastSavedTime() {
    const now = new Date().toLocaleTimeString();
    document.getElementById('saveTime').textContent = `Last saved at: ${now}`;
}

// Save notes to localStorage every 2 seconds
setInterval(saveNotes, 2000);
