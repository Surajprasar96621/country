const apiUrl = 'https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries';
const countryListContainer = document.getElementById('countryList');
async function fetchAndDisplayCountries() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayCountries(data);
    } catch (error) {
        console.error('Error fetching countries:', error);
    }
}
function displayCountries(countries) {
    countryListContainer.innerHTML = ''; 

    countries.forEach(country => {
        const countryCard = document.createElement('div');
        countryCard.classList.add('country-card');
        countryCard.innerHTML = `
            <h2>${country.name}</h2>
            <p>Population: ${country.population}</p>
            <p>Region: ${country.region}</p>
        `;
        countryListContainer.appendChild(countryCard);
    });
}
function sortCountriesByPopulation(countries) {
    return countries.sort((a, b) => b.population - a.population);
}
fetchAndDisplayCountries();
