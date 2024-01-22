// chatgpt assisted

document.addEventListener('DOMContentLoaded', function() {
    // Set the document title
    document.title = userMessages.headerTitle;

    // Create header
    const header = document.createElement('header');
    const headerTitle = document.createElement('h1');
    headerTitle.textContent = userMessages.headerTitle;
    header.appendChild(headerTitle);

    // Create navigation links
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const writerLi = document.createElement('li');
    const readerLi = document.createElement('li');
    const writerLink = document.createElement('a');
    writerLink.href = 'writer.html';
    writerLink.textContent = userMessages.noteWriterHeader;
    const readerLink = document.createElement('a');
    readerLink.href = 'reader.html';
    readerLink.textContent = userMessages.noteReaderHeader;
    writerLi.appendChild(writerLink);
    readerLi.appendChild(readerLink);
    ul.appendChild(writerLi);
    ul.appendChild(readerLi);
    nav.appendChild(ul);

    // Append elements to body
    document.body.appendChild(header);
    document.body.appendChild(nav);
});
