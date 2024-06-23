document.addEventListener('DOMContentLoaded', function() {
    let postsContainer = document.getElementById('posts');
    let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    blogPosts.forEach(post => {
        let postElement = document.createElement('div');
        postElement.className = 'blog-post';
        postElement.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p><p><em>by ${post.username}</em></p>`;
        postsContainer.appendChild(postElement);
    });

    document.getElementById('modeToggle').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });

    document.getElementById('backButton').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});