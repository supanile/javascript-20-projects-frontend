const container = document.getElementById("container");
const countElement = document.querySelector("#country-count span");

const getCountries = async () => {
    const url = 'https://restcountries.com/v2/all';
    const res = await fetch(url);
    const items = await res.json();
    
    // Update the count
    countElement.textContent = items.length;
    
    items.forEach(element => {
        createCard(element);
    });
}

const createCard = (data) => {
    const cardEl = document.createElement("div");
    cardEl.classList.add("country");
    const contentHTML = `
        <div class="img-container">
            <img src="${data.flag}" alt="${data.name} flag"/>
        </div>
        <div class="info">
            <h3 class="name">${data.name}</h3>
            <small>Capital: <span>${data.capital || 'N/A'}</span></small>
        </div>
    `;
    cardEl.innerHTML = contentHTML;
    container.appendChild(cardEl);
}

getCountries();