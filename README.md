# Phase-1-PROJECT
This is a repository containing my Phase 1 Travel Advisory App 
# Travel Advisory
This is a travel advisory website that displays travel advisories for different countries. Users can search for a specific country and see its current travel advisory message. The website also allows users to rate their experience.

## Getting Started
Clone this repository.
Open the index.html file in your web browser.
## Project Setup
The project uses HTML, CSS, and JavaScript. The HTML file (index.html) structures the content of the webpage. The CSS file (not included here) styles the visual elements of the website. The JavaScript file (src/index.js) handles the interactivity and functionality of the website.

## Description
The website consists of the following sections:

1. Top Bar: Displays the website title "LIVE LOVE TRAVEL" with an animation effect.
2. Search Section: Allows users to search for a country by entering its name in the search input field and clicking the "Search" button.
3. Travel Advisory: Displays the travel advisory message for the searched country retrieved from an external API.
4. Image Gallery: Showcases five popular tourist destinations with images, titles, and "Learn More" buttons. Clicking the "Learn More" button toggles the visibility of a detailed description for each destination.
5. Rating Form: Allows users to submit a rating (1-10) for the website. Upon submission, the form displays a thank you message and resets itself.

## Implementation
1. HTML: The HTML file defines the structure of the webpage and includes references to the CSS file and JavaScript file.
2. CSS: The CSS file styles the visual elements of the website, such as colors, fonts, layout, and animations.
3. JavaScript:
* API Calls: The getCountry function retrieves travel advisory information for a specified country using an external API. It converts the user input to lowercase for case-insensitive search and handles errors like country not found.
* Search Functionality: The onSearchButtonClick function is triggered when the user clicks the "Search" button. It calls the getCountry function to fetch the travel advisory information.
* "Learn More" Button: The JavaScript code iterates through all "Learn More" buttons and adds an event listener to each. Clicking the button toggles the visibility of the corresponding country description.
* Rating Form: The form handles user ratings. When submitted, it prevents the default form submission behavior, logs the rating to the console, displays a thank you message, and resets the form.

# Live Link
[Git](gh-pages link)

## Technologies used
Github
Javascript

## Support and contact details
github.com/bmaitho

### License
The content of this site is licensed under the MIT license
Copyright (c) 2018.