// import functions and grab DOM elements
const locationSelector = document.getElementById('location-select');
const locationDiv = document.getElementById('location');
const architectureSelector = document.getElementById('architecture-select');
const architectureDiv = document.getElementById('architecture-div');
const neighborSelector = document.getElementById('neighbor-select');
const neighborDiv = document.getElementById('neighbor-div');
const sloganButton = document.getElementById('slogan-button');
const sloganInput = document.getElementById('slogan-input');
const reportEl = document.getElementById('report');
const slogansEl = document.getElementById('slogans');

// let state
let locationCount = 0;
let architectureCount = 0;
let neighborCount = 0;
let slogan = [];

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

sloganButton.addEventListener('click', () => {
    slogan.push(sloganInput.value);
    sloganInput.value = '';
    displaySlogans();
});

// called functions

function displayStats() {
    reportEl.textContent = `You have changed the location ${locationCount} times, the architecture ${architectureCount} times, and your neighbor ${neighborCount} times.`;
}

function displaySlogans() {
    slogansEl.textContent = '';
    const slogans = document.getElementById('slogans');

    for (let tagline of slogan) {
        const li = document.createElement('li');
        li.textContent = tagline;
        slogans.append(li);
    }
}