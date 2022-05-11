// import functions and grab DOM elements
const locationSelector = document.getElementById('location-select');
const locationDiv = document.getElementById('location');
const architectureSelector = document.getElementById('architecture-select');
const architectureDiv = document.getElementById('architecture-div');
const neighborSelector = document.getElementById('neighbor-select');
const neighborDiv = document.getElementById('neighbor-div');

const reportEl = document.getElementById('report');

// let state
let locationCount = 0;
let architectureCount = 0;
let neighborCount = 0;

// event listeners
locationSelector.addEventListener('change', () => {
    locationCount++;
    locationDiv.style.backgroundImage = `url('./assets/${locationSelector.value}farthing.jpg')`;
    displayStats();
});

architectureSelector.addEventListener('change', () => {
    architectureCount++;
    architectureDiv.style.backgroundImage = `url('./assets/${architectureSelector.value}.jpg')`;
    displayStats();
});

neighborSelector.addEventListener('change', () => {
    neighborCount++;
    neighborDiv.style.backgroundImage = `url('./assets/${neighborSelector.value}.jpg')`;
    displayStats();
});

// called functions

function displayStats() {
    reportEl.textContent = `You have changed the location ${locationCount} times, the architecture 0 times, and the other thing 0 times.`;
}
