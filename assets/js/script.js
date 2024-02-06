// script.js

// Function to hide the loading screen
function hideLoadingScreen() {
    // Hide the loading screen
    document.getElementById("loading-screen").style.display = "none";
    // Show the website content
    document.getElementById("content").style.display = "block";
}

// Hide the loading screen after 3 seconds (adjust the time as needed)
setTimeout(hideLoadingScreen, 10);
