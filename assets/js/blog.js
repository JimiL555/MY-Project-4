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
    
    document.getElementById('toggleMode').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
    
    document.getElementById('backButton').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});