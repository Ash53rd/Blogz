// Get the theme toggle button
const themeToggleButton = document.getElementById('toggleTheme');

// Toggle the theme
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

// Add event listener to the theme toggle button
themeToggleButton.addEventListener('click', toggleTheme);

function toggleTheme() {
    console.log('Toggle button clicked');
    document.body.classList.toggle('dark-mode');
  }