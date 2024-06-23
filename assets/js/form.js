document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;
    let message = document.getElementById('message');

    if (username && title && content) {
        let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        blogPosts.push({ username, title, content });
        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
        window.location.href = 'blog.html';
    } else {
        message.textContent = 'Please fill out all fields.';
        message.style.color = 'red';
    }
});