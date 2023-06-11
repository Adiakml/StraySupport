// Check for user's theme preference in local storage
const currentTheme = localStorage.getItem('theme');

// If a theme is set in local storage, apply it to the page
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        document.getElementById('theme-style').setAttribute('href', 'dark-theme.css');
    }
}

// Toggle theme function
function toggleTheme() {
    // Get the current theme
    const currentTheme = document.documentElement.getAttribute('data-theme');

    // Switch to the opposite theme
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    // Apply the new theme to the document
    document.documentElement.setAttribute('data-theme', newTheme);

    // Update the stylesheet link
    const themeStyle = document.getElementById('theme-style');
    if (newTheme === 'dark') {
        themeStyle.setAttribute('href', 'dark-theme.css');
    } else {
        themeStyle.setAttribute('href', 'light-theme.css');
    }

    // Store the current theme preference in local storage
    localStorage.setItem('theme', newTheme);
}

// Add click event listener to the theme toggle button
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', toggleTheme);
