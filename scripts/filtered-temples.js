// Get the current year and set it in the span with id "currentyear"
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = `©${currentYear}`;

// Get the last modified date of the document and set it in the paragraph with id "lastModified"
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `LastModified: ${lastModified}`;

const menuButton = document.getElementById('menu');
const navigation = document.querySelector('nav');
let isMenuOpen = false;

// Add event listener to menu button
menuButton.addEventListener('click', () => {
  if (!isMenuOpen) {
    openMenu();
  } else {
    closeMenu();
  }
});

// Function to open menu
function openMenu() {
  navigation.classList.add('show-nav');
  menuButton.innerHTML = '<span>&#x2715;</span>'; // Replace with "X" icon
  isMenuOpen = true;
}
// Function to close menu
function closeMenu() {
  navigation.classList.remove('show-nav');
  menuButton.innerHTML = '<span>&#x2261;</span>'; // Replace with hamburger icon
  isMenuOpen = false;
}

// Add event listener to document to close menu when clicking outside
document.addEventListener('click', (event) => {
  if (!navigation.contains(event.target) && !menuButton.contains(event.target)) {
    closeMenu();
  }
});


const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Madrid Spain",
        location: "Madrid, Spain",
        dedicated: "1999, March, 19",
        area: 45800,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/madrid-spain-temple/madrid-spain-temple-54292.jpg"
    },
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-8207.jpg"
    },
    {
        templeName: "Manila Philippines",
        location: "Manila, Philippines",
        dedicated: "1984, September, 25",
        area: 26683,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/manila-philippines-temple/manila-philippines-temple-48891.jpg"
    },
  ];
  // Function to filter temples based on the selected criteria
function filterTemples(criteria) {
    let filteredTemples = temples;
  
    switch (criteria) {
      case 'old':
        filteredTemples = temples.filter((temple) => parseInt(temple.dedicated) < 1900);
        break;
      case 'new':
        filteredTemples = temples.filter((temple) => parseInt(temple.dedicated) > 2000);
        break;
      case 'large':
        filteredTemples = temples.filter((temple) => parseInt(temple.area) > 90000);
        break;
      case 'small':
        filteredTemples = temples.filter((temple) => parseInt(temple.area) < 10000);
        break;
      default:
        filteredTemples = temples;
        break;
    }
  
    return filteredTemples;
  }
// Function to display temples
function displayTemples(temples) {
    const templeContainer = document.getElementById('temple-container');
    templeContainer.innerHTML = '';
  
    temples.forEach((temple) => {
      const templeCard = document.createElement('div');
      templeCard.classList.add('temple-card');
  
      const templeHtml = `
        <h2>${temple.templeName}</h2>
        <p>Location: ${temple.location}</p>
        <p>Dedicated Date: ${temple.dedicated}</p>
        <p>Area: ${temple.area} sqft</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      `;
  
      templeCard.innerHTML = templeHtml;
      templeContainer.appendChild(templeCard);
    });
  }
  
  // Add event listeners to the main navigation menu items
document.addEventListener('DOMContentLoaded', () => {
    const navigationMenuItems = document.querySelectorAll('.navigation-menu-item');
  
    navigationMenuItems.forEach((menuItem) => {
      menuItem.addEventListener('click', (event) => {
        const criteria = event.target.dataset.criteria;
        const filteredTemples = filterTemples(criteria);
        displayTemples(filteredTemples);
      });
    });
  
    // Display all temples by default
    displayTemples(temples);
  });
  
  