// Get references to the play button and audio element
const playButton = document.querySelector('.play-btn');
const audio = new Audio('audio/background-music.mp3'); // Link to the audio file

// Flag to keep track of whether the music is playing or not
let isPlaying = false;

// Play or pause music when the play button is clicked
playButton.addEventListener('click', function () {
    if (isPlaying) {
        audio.pause(); // Pause the audio
        playButton.innerHTML = "Play"; // Change button text to "Play"
    } else {
        audio.play(); // Play the audio
        playButton.innerHTML = "Pause"; // Change button text to "Pause"
    }
    
    // Toggle the isPlaying flag
    isPlaying = !isPlaying;
});

// Function to toggle between light and dark themes
function toggleTheme() {
    const body = document.body;

    // Toggle the 'light' and 'dark' classes
    body.classList.toggle('light');
    body.classList.toggle('dark');

    // Toggle the theme button text (optional)
    const themeButton = document.querySelector('.theme-toggle-btn');
    if (body.classList.contains('dark')) {
        themeButton.innerText = 'Light Mode'; // Show 'Light Mode' when dark theme is active
    } else {
        themeButton.innerText = 'Dark Mode'; // Show 'Dark Mode' when light theme is active
    }
}

// Function to show content sections (Rules, Partnership, Owners)
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach((section) => {
        section.style.display = 'none';
    });

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }
}
