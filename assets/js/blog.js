// Get the blog posts container
const blogPostsContainer = document.getElementById('blogPosts');

// Fetch blog posts from localStorage
function fetchBlogPostsFromLocalStorage() {
  const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  return blogPosts;
}

// Render blog posts
function renderBlogPosts() {
  const blogPosts = fetchBlogPostsFromLocalStorage();

  // Clear the blog posts container
  blogPostsContainer.innerHTML = '';

  // Create and append blog post elements
  blogPosts.forEach((blogPost) => {
    const blogPostElement = document.createElement('div');
    blogPostElement.classList.add('blog-post');

    blogPostElement.innerHTML = `
      <h3>${blogPost.title}</h3>
      <p>Author: ${blogPost.username}</p>
      <p>${blogPost.content}</p>
      <p>Created: ${new Date(blogPost.createdAt).toLocaleString()}</p>
    `;

    blogPostsContainer.appendChild(blogPostElement);
  });
}

// Call the renderBlogPosts function when the page loads
window.addEventListener('DOMContentLoaded', renderBlogPosts);