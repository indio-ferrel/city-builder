// import functions and grab DOM elements
const locationSelector = document.getElementById('locationSelect');
const locationDiv = document.getElementById('location');

const reportEl = document.getElementById('report');

// let state
let locationCount = 0;

// event listeners
locationSelector.addEventListener('change', () => {
    locationCount++;
    locationDiv.style.backgroundImage = `url('./assets/${locationSelector.value}farthing.jpg')`;
    displayStats();
});

// called functions

function displayStats() {
    reportEl.textContent = `You have changed the location ${locationCount} times, the architecture 0 times, and the other thing 0 times.`;
}