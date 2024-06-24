document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    
    if (!username || !title || !content) {
        alert('Please complete the form');
        return;
    }
    
    const blogPost = {
        username,
        title,
        content
    };
    
    let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    blogPosts.push(blogPost);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    
    window.location.href = 'blog.html';
});