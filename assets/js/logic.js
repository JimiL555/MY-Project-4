document.addEventListener('DOMContentLoaded', function() {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const postsContainer = document.getElementById('posts');
    
    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <p><em>by ${post.username}</em></p>
        `;
        postsContainer.appendChild(postElement);
    });

    // Check for saved mode in localStorage
    const currentMode = localStorage.getItem('mode');
    if (currentMode === 'dark') {
        document.body.classList.add('dark-mode');
    }

    document.getElementById('toggleMode').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const mode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('mode', mode);
    });

    document.getElementById('backButton').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});