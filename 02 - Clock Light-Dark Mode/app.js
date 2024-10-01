// Select elements
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const btnToggle = document.querySelector(".toggle");

// Function to set time and date
function setTime() {
    const now = new Date();
    
    // Set time
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    timeEl.textContent = `${hours}:${minutes}:${seconds}`;
    
    // Set date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateEl.textContent = now.toLocaleDateString('th-TH', options);
}

// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        btnToggle.textContent = "Light Mode";
    } else {
        btnToggle.textContent = "Dark Mode";
    }
}

// event listener for toggle button
btnToggle.addEventListener("click", toggleDarkMode);

// Initialize
setTime();
setInterval(setTime, 1000);