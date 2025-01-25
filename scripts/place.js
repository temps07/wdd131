// Get the current year and set it in the span with id "currentyear"
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = `©${currentYear}`;

// Get the last modified date of the document and set it in the paragraph with id "lastModified"
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `LastModified: ${lastModified}`;

// Define static values for temperature and wind speed
let temperature = 5; // °C
let windSpeed = 20; // km/h

// Function to calculate wind chill factor
function calculateWindChill(temperature, windSpeed) {
  return 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
}

// Check conditions for viable wind chill calculations
if (temperature <= 10 && windSpeed > 4.8) {
  // Calculate and display wind chill factor
  let windChill = calculateWindChill(temperature, windSpeed);
  document.getElementById("windchill").innerHTML = `${windChill.toFixed(2)} °C`;
} else {
  // Display "N/A" if conditions are not met
  document.getElementById("windchill").innerHTML = "N/A";
}