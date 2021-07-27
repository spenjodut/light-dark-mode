const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');


// Switch Images to Dark or Light
function switchImageTheme(theme) {
    image1.src = `img/undraw_proud_coder_${theme}.svg`;
    image2.src = `img/undraw_feeling_proud_${theme}.svg`;
    image3.src = `img/undraw_conceptual_idea_${theme}.svg`;
}

// Toggle Between Dark and Light Modes
function toggleLightDarkMode(theme) {
    const isDark = theme === DARK_THEME ? true : false;
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : 
        toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun'); 
    isDark ? switchImageTheme(DARK_THEME) : switchImageTheme(LIGHT_THEME);
}

// Switch Theme Dynamically Based on Slider
function switchTheme(event) {
    const newTheme = event.target.checked ? DARK_THEME : LIGHT_THEME;
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    toggleLightDarkMode(newTheme);
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage for Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === DARK_THEME) {
        toggleSwitch.checked = true;
        toggleLightDarkMode(DARK_THEME);
    } 
}