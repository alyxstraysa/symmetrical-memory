document.addEventListener('DOMContentLoaded', (event) => {
    // Load the default home content
    loadContent('home');
});

function loadContent(page) {
    const content = {
        home: {
            title: 'Welcome to My Blog',
            text: 'This is the home page.'
        },
        'game-design': {
            title: 'Game Design',
            text: 'Content about game design will go here.'
        },
        writing: {
            title: 'Writing',
            text: 'Content about writing will go here.'
        },
        about: {
            title: 'About Me',
            text: 'Information about me will go here.'
        }
    };

    const main = document.getElementById('content');
    main.innerHTML = `
        <h1>${content[page].title}</h1>
        <p>${content[page].text}</p>
    `;

    // Smooth scrolling
    window.scrollTo({ top: 0, behavior: 'smooth' });
}