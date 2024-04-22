// Get form elements
const blogPostForm = document.getElementById('blogPostForm');
const usernameInput = document.getElementById('username');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');

// Handle form submission
blogPostForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get form values
  const username = usernameInput.value;
  const title = titleInput.value;
  const content = contentInput.value;

  // Validate form fields
  if (!username || !title || !content) {
    alert('Please fill in all the required fields.');
    return;
  }

  // Create blog post object
  const blogPost = {
    username,
    title,
    content,
    createdAt: new Date().toISOString()
  };

  // save blog post to localStorage
  saveBlogPostToLocalStorage(blogPost);

  // Clear form fields
  blogPostForm.reset();

  // Redirect to blog page
  window.location.href = 'blog.html';
});

// Helper function to save blog post to localStorage
function saveBlogPostToLocalStorage(blogPost) {
  // Retrieve existing blog posts from localStorage
  const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

  // Add the new blog post to the array
  blogPosts.push(blogPost);

  // Save the updated blog posts to localStorage
  localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
}