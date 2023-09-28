// Get the clock element by its ID
const clock = document.getElementById('clock');

// Function to update the clock content
function updateClock() {
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}

// Initial update
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);
