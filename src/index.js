// Assigning vallues to various constants I will need throughout the code 
const url = "https://www.travel-advisory.info/api?countrycode=";
const moreButton = document.getElementById('moreButton');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const embed = document.getElementById('embed');
const form = document.getElementById("ratingForm");
const message = document.getElementById("message");
document.addEventListener('beforeunload', function(event) {

});
// The api assigened to the url constant does not allow the user to search for a country using the country name only ISO codes . 
// This const "countriesByName" is like my own Api , it contains all the countries and their ISO codes 
// basically , here the country name are used as keys and the iso codes as values 
const countriesByName = {
  "Afghanistan": "AF",
  "Åland Islands": "AX",
  "Albania": "AL",
  "Algeria": "DZ",
  "American Samoa": "AS",
  "Andorra": "AD",
  "Angola": "AO",
  "Anguilla": "AI",
  "Antarctica": "AQ",
  "Antigua and Barbuda": "AG",
  "Argentina": "AR",
  "Armenia": "AM",
  "Aruba": "AW",
  "Australia": "AU",
  "Austria": "AT",
  "Azerbaijan": "AZ",
  "Bahamas": "BS",
  "Bahrain": "BH",
  "Bangladesh": "BD",
  "Barbados": "BB",
  "Belarus": "BY",
  "Belgium": "BE",
  "Belize": "BZ",
  "Benin": "BJ",
  "Bermuda": "BM",
  "Bhutan": "BT",
  "Bolivia (Plurinational State of)": "BO",
  "Bonaire, Sint Eustatius and Saba": "BQ",
  "Bosnia and Herzegovina": "BA",
  "Botswana": "BW",
  "Bouvet Island": "BV",
  "Brazil": "BR",
  "British Indian Ocean Territory": "IO",
  "Brunei Darussalam": "BN",
  "Bulgaria": "BG",
  "Burkina Faso": "BF",
  "Burundi": "BI",
  "Cabo Verde": "CV",
  "Cambodia": "KH",
  "Cameroon": "CM",
  "Canada": "CA",
  "Cayman Islands": "KY",
  "Central African Republic": "CF",
  "Chad": "TD",
  "Chile": "CL",
  "China": "CN",
  "Christmas Island": "CX",
  "Cocos (Keeling) Islands": "CC",
  "Colombia": "CO",
  "Comoros": "KM",
  "Congo": "CG",
  "Congo (Democratic Republic of the)": "CD",
  "Cook Islands": "CK",
  "Costa Rica": "CR",
  "Côte d'Ivoire": "CI",
  "Croatia": "HR",
  "Cuba": "CU",
  "Curaçao": "CW",
  "Cyprus": "CY",
  "Czech Republic": "CZ",
  "Denmark": "DK",
  "Djibouti": "DJ",
  "Dominica": "DM",
  "Dominican Republic": "DO",
  "Ecuador": "EC",
  "Egypt": "EG",
  "El Salvador": "SV",
  "Equatorial Guinea": "GQ",
  "Eritrea": "ER",
  "Estonia": "EE",
  "Ethiopia": "ET",
  "Falkland Islands (Malvinas)": "FK",
  "Faroe Islands": "FO",
  "Fiji": "FJ",
  "Finland": "FI",
  "France": "FR",
  "French Guiana": "GF",
  "French Polynesia": "PF",
  "French Southern Territories": "TF",
  "Gabon": "GA",
  "Gambia": "GM",
  "Georgia": "GE",
  "Germany": "DE",
  "Ghana": "GH",
  "Gibraltar": "GI",
  "Greece": "GR",
  "Greenland": "GL",
  "Grenada": "GD",
  "Guadeloupe": "GP",
  "Guam": "GU",
  "Guatemala": "GT",
  "Guernsey": "GG",
  "Guinea": "GN",
  "Guinea-Bissau": "GW",
  "Guyana": "GY",
  "Haiti": "HT",
  "Heard Island and McDonald Islands": "HM",
  "Holy See": "VA",
  "Honduras": "HN",
  "Hong Kong": "HK",
  "Hungary": "HU",
  "Iceland": "IS",
  "India": "IN",
  "Indonesia": "ID",
  "Iran (Islamic Republic of)": "IR",
  "Iraq": "IQ",
  "Ireland": "IE",
  "Isle of Man": "IM",
  "Israel": "IL",
  "Italy": "IT",
  "Jamaica": "JM",
  "Japan": "JP",
  "Jersey": "JE",
  "Jordan": "JO",
  "Kazakhstan": "KZ",
  "Kenya": "KE",
  "Kiribati": "KI",
  "Korea (Democratic People's Republic of)": "KP",
  "Korea (Republic of)": "KR",
  "Kuwait": "KW",
  "Kyrgyzstan": "KG",
  "Lao People's Democratic Republic": "LA",
  "Latvia": "LV",
  "Lebanon": "LB",
  "Lesotho": "LS",
  "Liberia": "LR",
  "Libya": "LY",
  "Liechtenstein": "LI",
  "Lithuania": "LT",
  "Luxembourg": "LU",
  "Macao": "MO",
  "Macedonia (the former Yugoslav Republic of)": "MK",
  "Madagascar": "MG",
  "Malawi": "MW",
  "Malaysia": "MY",
  "Maldives": "MV",
  "Mali": "ML",
  "Malta": "MT",
  "Marshall Islands": "MH",
  "Martinique": "MQ",
  "Mauritania": "MR",
  "Mauritius": "MU",
  "Mayotte": "YT",
  "Mexico": "MX",
  "Micronesia (Federated States of)": "FM",
  "Moldova (Republic of)": "MD",
  "Monaco": "MC",
  "Mongolia": "MN",
  "Montenegro": "ME",
  "Montserrat": "MS",
  "Morocco": "MA",
  "Mozambique": "MZ",
  "Myanmar": "MM",
  "Namibia": "NA",
  "Nauru": "NR",
  "Nepal": "NP",
  "Netherlands": "NL",
  "New Caledonia": "NC",
  "New Zealand": "NZ",
  "Nicaragua": "NI",
  "Niger": "NE",
  "Nigeria": "NG",
  "Niue": "NU",
  "Norfolk Island": "NF",
  "Northern Mariana Islands": "MP",
  "Norway": "NO",
  "Oman": "OM",
  "Pakistan": "PK",
  "Palau": "PW",
  "Palestine, State of": "PS",
  "Panama": "PA",
  "Papua New Guinea": "PG",
  "Paraguay": "PY",
  "Peru": "PE",
  "Philippines": "PH",
  "Pitcairn": "PN",
  "Poland": "PL",
  "Portugal": "PT",
  "Puerto Rico": "PR",
  "Qatar": "QA",
  "Réunion": "RE",
  "Romania": "RO",
  "Russian Federation": "RU",
  "Rwanda": "RW",
  "Saint Barthélemy": "BL",
  "Saint Helena, Ascension and Tristan da Cunha": "SH",
  "Saint Kitts and Nevis": "KN",
  "Saint Lucia": "LC",
  "Saint Martin (French part)": "MF",
  "Saint Pierre and Miquelon": "PM",
  "Saint Vincent and the Grenadines": "VC",
  "Samoa": "WS",
  "San Marino": "SM",
  "Sao Tome and Principe": "ST",
  "Saudi Arabia": "SA",
  "Senegal": "SN",
  "Serbia": "RS",
  "Seychelles": "SC",
  "Sierra Leone": "SL",
  "Singapore": "SG",
  "Sint Maarten (Dutch part)": "SX",
  "Slovakia": "SK",
  "Slovenia": "SI",
  "Solomon Islands": "SB",
  "Somalia": "SO",
  "South Africa": "ZA",
  "South Georgia and the South Sandwich Islands": "GS",
  "South Sudan": "SS",
  "Spain": "ES",
  "Sri Lanka": "LK",
  "Sudan": "SD",
  "Suriname": "SR",
  "Svalbard and Jan Mayen": "SJ",
  "Swaziland": "SZ",
  "Sweden": "SE",
  "Switzerland": "CH",
  "Syrian Arab Republic": "SY",
  "Taiwan, Province of China": "TW",
  "Tajikistan": "TJ",
  "Tanzania, United Republic of": "TZ",
  "Thailand": "TH",
  "Timor-Leste": "TL",
  "Togo": "TG",
  "Tokelau": "TK",
  "Tonga": "TO",
  "Trinidad and Tobago": "TT",
  "Tunisia": "TN",
  "Turkey": "TR",
  "Turkmenistan": "TM",
  "Turks and Caicos Islands": "TC",
  "Tuvalu": "TV",
  "Uganda": "UG",
  "Ukraine": "UA",
  "United Arab Emirates": "AE",
  "United Kingdom of Great Britain and Northern Ireland": "GB",
  "United States of America": "US",
  "United States Minor Outlying Islands": "UM",
  "Uruguay": "UY",
  "Uzbekistan": "UZ",
  "Vanuatu": "VU",
  "Venezuela (Bolivarian Republic of)": "VE",
  "Viet Nam": "VN",
  "Virgin Islands (British)": "VG",
  "Virgin Islands (U.S.)": "VI",
  "Wallis and Futuna": "WF",
  "Western Sahara": "EH",
  "Yemen": "YE",
  "Zambia": "ZM",
  "Zimbabwe": "ZW"
};


//The "getCountry" function is used asynchronously to retrieve travel advisory information for a specified country
// I have also used it to cater for user errors such as not following correct casing by converting all the user inputs to lower case first 
async function getCountry() {
   // This line gets the value of the input element with the ID "searchInput" and converts it to lowercase letters.
    const searchValue = searchInput.value.toLowerCase();
    // This checks if the `searchValue` is truthy 
    // which means that the user has inputed a country name
    if (!!searchValue) {
             // This line basically assignes the value of the const "countryKeys" to be the keys of the object literal "countriesByName" which are country names 
        const countryKeys = Object.keys(countriesByName);
             // This line converts all the country keys/country names to lower case letters, so that they match with the users search input which I also earlier converted to lower case
        const lowerCaseCountryKeys = countryKeys.map(key => key.toLowerCase());
             // This line just checks if the `lowerCaseCountryKeys` array includes the `searchValue` which is the user's search input.
        if (lowerCaseCountryKeys.includes(searchValue)) {
             // As earlier mentioned this api does not allow a user to searc for a country by its name only by iso country codes
             // This line assignes the value of "countyCode" to be the country code from the "countriesByName" object using the matching country name from the `lowerCaseCountryKeys` array
            const countryCode = countriesByName[countryKeys[lowerCaseCountryKeys.indexOf(searchValue)]];
            console.log(countryCode)
             // This line fetches data from the API and manipulates the API to filter the search results to only bring up the "countryCode" which is going to be the users search input 
             // so basically what has happened is on the frontend the user has inputed a country name but here ,cause of API limitation on the backend we have converted the users country name to be that countries corresponding iso code and added it to the api  
          const response = await fetch(`https://www.travel-advisory.info/api?countrycode=`+ countryCode);
             // This line parses the JSON data from the API and stores it in a variable called "data"
            const data = await response.json();
           
            const parsedData = data.data
             // This line gets the nested data for the specific country from the parsed response
            const countryInfo = parsedData[countryCode]
             // This line logs the travel advisory message to the console
            console.log(countryInfo.advisory.message)

            // This line sets the text content of the element with the ID "embed" to the travel advisory message
            // makes it easy to style 
            embed.textContent =countryInfo.advisory.message
             // This line displays an alert if the country is not found or the user eters an invalid input 
        } else {
            alert("Country not found")
        }
    }
}
//event handler function that is triggered when a user interacts with the search input element.
function search (e){
  console.log(searchInput.value);
}
// This function is called when the search button is clicked
function onSearchButtonClick(){
	getCountry()
}
// This line adds an event listener to the search button
searchButton.addEventListener('click',onSearchButtonClick)
// This line selects all the "moreButton" buttons and assigns them to one "button" to make it easier to work with
const buttons = document.querySelectorAll('.moreButton button');
// This line iterates over each button using a forEach loop
buttons.forEach(button => {
 // This line adds an event listener to each button for the click event
  button.addEventListener('click', () => {
 // This line gets the description element that is a sibling of the clicked button
    const description = button.parentElement.nextElementSibling;
 // This line toggles the display style of the description element between 'block' and 'none' 
 // So that when the user clicks on the learn more button the description appears but when they click again it dissapears 
    description.style.display = description.style.display === 'none' ? 'block' : 'none';
  });
});
// This line adds an event listener to the form for the submit event
form.addEventListener("submit", function(event) {
  // This line prevents the default form submission behavior 
  event.preventDefault(); 
// This line gets the value of the element with the ID "rating"
  const rating = document.getElementById("rating").value;
  // This line logs the rating value to the console for debugging
  console.log("Rating:", rating);
  // This line displays an alert message with the submitted rating and a thank you message
 alert(`Rating: ${rating}: Thanks for the feedback`);
  // This line resets the form to its initial state after the user submits the form 
  form.reset(); 
});