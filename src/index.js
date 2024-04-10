
    function searchCountry() {
  const url = `https://restcountries.com/v3.1/all?fields=name,capital,region`;

  const searchInput = document.getElementById('searchInput').value

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const countryData = data[searchInput];//Access data using the country code

      if (countryData) {
        displayCountryInfo(countryData);
      } else {
        console.error("Country not found:", searchInput);
      }
    })
    .catch(error => {
      console.error('error fetching country data: ', error);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  // Call searchCountry when the search button is clicked
  document.getElementById("search-btn").addEventListener("click", searchCountry);
});

function displayCountryInfo(data) {
  // Update the HTML elements with the fetched country information
  document.getElementById("result").innerHTML = `
    <h2>${data.name}</h2>  <p>Risk Score: ${data.advisory.score}</p>  <p>Travel Advisory: ${data.advisory.message}</p>  `;

}
  
  
function getCountryInfo(data) {
   fetch(url)
      .then(response => response.json())
      .then(data => {
          for (let countryInfo of data.data) {
              const countryData = countryInfo;//Extracting country data from data array
              displayCountryInfo(countryData);//Display each country's info
          }
      })
.catch(error => {
          console.error('error fetching country data: ', error);
      });
}

function displayCountryInfo(countryData) {
  const resultDiv = document.getElementById('result');
    resultDiv.innerHTML += `
      <h2>${countryData.country}</h2>
      <p>Continent: ${countryData.continent}</p>
      <p>Travelling Rating: ${countryData.advisory.score}</p>
      <p>Safety Level: ${countryData.advisory.state}</p>
    `;
}